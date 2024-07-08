import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js"
import cors from "cors"
import userRoute from "./route/user.route.js"

dotenv.config();

const app = express();
app.use(cors())
app.use(express.json())
// middleware to make sure data goes in json format
app.use(
  express.urlencoded({ extended: true })
);

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// connect to mongodb
try{
  mongoose.connect("mongodb://localhost:27017/bookStores", {
    useNewUrlParser: true,
    useUnifiedTopology: true
    // we write the above 2 lines only if we using mongodb locally
  })
  console.log("Connected to MongoDB");
} catch(error) {
  console.log("Error: ", error);
}


// defining routes
app.use("/book", bookRoute)
app.use("/user", userRoute)

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})


