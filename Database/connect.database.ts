import mongoose from "mongoose";

const connectToDB = async() => {
    try {
        await mongoose.connect("mongodb://localhost:27017/ecommerce").then(() => console.log("Connected to MongoDB"))
    } catch (error) {
        console.log("Failed connecting to MongoDB")
        console.error(error)
    }
}

export default connectToDB