import { Router } from "express";
import { createCompany } from "../Controller/companyController.js";
import {
  getAllcompany,
  getSinlgecompany,
} from "../Controller/CompanyController.js";

const router = Router();

router.route("/").get(getAllcompany).post(createCompany);

router.route("/:id").get(getSinlgecompany);

export default router;
