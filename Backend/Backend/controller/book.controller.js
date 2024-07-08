import Book from "../model/book.model.js";


// we use async await in backend to perform asynchronous operations
export const getBook = async(req, res) => {
    try {
        const book = await Book.find();
        // we find the book from our model
        // if we get we generate 200 success response
        // we send the data in json format later on
        res.status(200).json(book);
    } catch (error) {
        console.log("Error: ", error);
        res.status(500).json(error);
    }
};