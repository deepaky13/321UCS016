import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
import morgan from "morgan";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";
// * ---------------------------public-----------------------------

import { dirname } from "path";
import { fileURLToPath } from "url";
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

if (process.env.NODE_ENV === "develop") {
  app.use(morgan("dev"));
}

app.use(express.static(path.resolve(__dirname, "./public")));
app.use(cookieParser());
app.use(express.json());
app.use(cors());
// * -----------------------------------------------------------

app.get("/", (req, res) => {
  res.send("hello world");
});

// * ------------------------Router----------------------------
import companyRouter from "./router/companyRouter.js";

app.use("/api/v1/companies", companyRouter);

app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});

// * -----------------Building-Blocks---------------------------------

app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});

// * -----------------------------------------------------------

const port = process.env.PORT || 3000;

try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}
