import express from "express";
import { getPosts } from "../controllers/post.js";

const router = express.Router();

//functions venogo salvati dentro post.js per clean code
router.get("/", getPosts);

export default router;
