
const mongoose = require('mongoose');

const server = `mongodb://localhost:27017`;

const db_name = 'exam';

class Db_connect {
    constructor() {
        mongoose.connect(`${server}/${db_name}`)
            .then(() => {
                console.log(`Connected to database ${db_name}...`);
            })
            .catch(error => {
                console.log(error);
            })
    }
}
module.exports = new Db_connect();

