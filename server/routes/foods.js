import express from "express";
import { getFoods, createFood } from "../controllers/foods.js";

const router = express.Router();

//functions venogo salvati dentro foods.js per clean code
router.get("/", getFoods);
router.get("/", createFood);

export default router;
