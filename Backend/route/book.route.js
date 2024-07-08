import express from "express"
import { getBook } from "../controller/book.controller.js"

const router = express.Router();

router.get("/", getBook)
// when we ho to "/" route we want to getBook from our backend and display them on our homepage

export default router;