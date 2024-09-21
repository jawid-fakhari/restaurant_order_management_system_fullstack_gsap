import express from 'express';
const router = express.Router();
import { postSignupData } from "../controllers/signup.controller.js";

router.post('/', postSignupData);

export default router;
