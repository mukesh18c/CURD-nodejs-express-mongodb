const mongoose = require('mongoose');

var productSchema = new mongoose.Schema({
    ProductName: {
        type: String,
        required: 'This field is required.'
    },
    ProductID: {
        type: String
    },
    price: {
        type: String
    }
});

mongoose.model('product', productSchema);