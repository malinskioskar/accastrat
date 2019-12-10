import mongoose, { Schema } from 'mongoose';

const ProductSchema = new Schema({
    text: {
        type: String,
        required: true,
    },
});

const Product = mongoose.model('products', ProductSchema);

export default Product;
