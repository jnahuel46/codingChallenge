const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductsSchema = new Schema ({
    name: { type: String, required: true},
    description: {type: String, required: true},
    image_url: {type: String, required: true},
    price: {type: Number, required: true}

});

module.exports = mongoose.model('Products', ProductsSchema);