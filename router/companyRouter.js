import { Router } from "express";
import { createCompany } from "../Controller/companyController.js";

const router = Router();

router.post("/company", createCompany);

export default router;
