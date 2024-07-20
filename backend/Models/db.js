import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const mongo_url = process.env.MONGO_CON;
console.log(mongo_url);
mongoose
  .connect(mongo_url)
  .then(() => {
    console.log(`MongoDB Connected..`);
  })
  .catch((err) => {
    console.log(`MongoDB Connection Error:`, err);
  });
