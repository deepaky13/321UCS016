import CompanyModel from "../models/CompanySchema.js";

export const createCompany = async (req, res) => {
  try {
    const company = await CompanyModel.create(req.body);
    res.status(201).json(company, { message: "comaony creates" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
