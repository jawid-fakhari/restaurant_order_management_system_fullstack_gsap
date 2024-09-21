import express from "express";
const router = express.Router();
import {
  getCheckouts,
  getCheckout,
  postCheckout,
  putCheckout,
  delCheckout,
} from "../controllers/checkout.controller.js";

router.get("/", getCheckouts);
router.get("/:id", getCheckout);
router.post("/", postCheckout);
router.put("/:id", putCheckout);
router.delete("/:id", delCheckout);

export default router;