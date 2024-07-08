import mongoose from "mongoose";

const bookSchema=mongoose.Schema({
    name: String,
    price:Number,
    category:String,
    image:String,
    title:String
})

const Book = mongoose.model("Book", bookSchema)
// all the schema from bookSchema will be stored inside Book

export default Book;