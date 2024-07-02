import CompanyModel from "../models/CompanySchema.js";

// geting the company deatails

export const getAllcompany = async (req, res) => {
  const company = await CompanyModel.find();
  res.status(200).json({ company });
};

export const createCompany = async (req, res) => {
  try {
    const company = await CompanyModel.create(req.body);
    res.status(201).json({ message: "company is created" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const getSinlgecompany = async (req, res) => {
  const company = await CompanyModel.findById(req.params.id);

  res.status(200).json({ company });
};
