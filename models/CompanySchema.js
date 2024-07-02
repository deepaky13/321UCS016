import mongoose from "mongoose";

const companySchema = mongoose.Schema({
  companyName: String,
  ownerName: String,
  rollNo: String,
  ownerEmail: String,
  accessCode: String,
});

export default mongoose.model("Company", companySchema);
