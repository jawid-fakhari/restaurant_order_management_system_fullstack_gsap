import express from "express";
import Product from "../models/product.model.js";
const router = express.Router();

import {
  getProducts,
  getSingleProduct,
  postProducts,
  putProducts,
  delProducts
} from "../controllers/product.controller.js";

router.get("/", getProducts);
router.get("/:id", getSingleProduct);
router.post("/", postProducts);
router.put("/:id", putProducts);
router.delete("/:id", delProducts);

export default router;
