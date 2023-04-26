// const express = require("express");

import express from "express";
// To use ES6 modules , write a script "type": "module" in the package.json file

import dotenv from "dotenv";
dotenv.config();

import colors from "colors";
import { connectDB } from "./config/connectDB.js";

connectDB();

const port = process.env.PORT || 5000;
const app = express();

app.listen(port, () => {
  console.log(`Server is running on port ${port}`.yellow);
});
