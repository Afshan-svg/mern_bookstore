// We will add get request 

import Book from "../model/book.model.js";
// since we are retrieving data from database it can be time consuming hence we using async operations

export const getBook = async (req, res) => {
    try {
        const book=await Book.find()
        // we find the book from our database
        res.status(200).json(book)
    } catch(error) {
        console.log("Error: ", error);
        res.status(500).json(error)
    }
}
