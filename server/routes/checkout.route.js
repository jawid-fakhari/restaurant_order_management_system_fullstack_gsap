import express from "express";
const router = express.Router();
import {
  getCheckout,
  postCheckout,
  putCheckout,
  delCheckout,
} from "../controllers/checkout.controller.js";

router.get("/", getCheckout);
router.post("/:id", postCheckout);
router.put("/:id", putCheckout);
router.delete("/:id", delCheckout);

export default router;
