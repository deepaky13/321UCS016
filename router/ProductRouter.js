import { Router } from "express";
import { createProduct } from "../Controller/productController.js";

const router = Router();

router.post("/", createProduct);

export default router;
