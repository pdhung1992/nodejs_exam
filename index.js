
const express = require('express');
const app = express();

const port = 1111;

app.listen(port, () => {
    console.log('Server is running...')
})

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require('./src/database/db_connect');

const product_route = require('./src/routes/product.route');
app.use('/product', product_route);