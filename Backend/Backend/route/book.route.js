import express from "express";
import { getBook } from "../controller/book.controller.js";

const router = express.Router();

router.get("/", getBook);

// Express will call the getBook function imported from book.controller.js

export default router;