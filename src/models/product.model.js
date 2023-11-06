
const mongoose = require('mongoose');

const product_schema = new mongoose.Schema({
    product_code: {
        type: String,
        required: [true, 'Product code is required!']
    },
    product_name: {
        type: String,
        required: [true, 'Product name is required!'],
        minLength: [6, 'Product name must have minimum 6 characters!']
    },
    product_date: {
        type: Date,
        required: [true, 'Date is required!']
    },
    product_origin_price: {
        type: Number,
        required: [true, 'Price is required!'],
        validate: {
            validator: function (price) {
                return price > 0;
            },
            message: 'Price must be greater than 0!'
        }
    },
    quantity: {
        type: Number,
        required: [true, 'Quantity is required!'],
        validate: {
            validator: function (available) {
                return available >= 0;
            },
            message: 'Quantity can not be less than 0!'
        }
    },
    product_store_code: {
        type: String,
        required: [true, 'Store code is required!']
    }
})

const Product = mongoose.model('Product', product_schema);

module.exports = Product;