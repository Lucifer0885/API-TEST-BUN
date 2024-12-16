import mongoose, { Schema } from "mongoose";

const schema = new Schema ({
    title: {
        type: String,
        unique: true,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        unique: true,
        required: true,
    },
    imageUrl: String,
    price: {
        type: Number,
        required: true
    }
},{
    versionKey: false,
    timestamps: true,
})

const Product = mongoose.model("Product",schema)

export default Product
    
