import express from "express";
import dotenv from "dotenv";
import "./Models/db.js";
import bodyParser from "body-parser";
import cors from "cors";
import AuthRouter from "./Routes/AuthRouter.js";
//Load environment variables from .env file
dotenv.config();

const app = express();

const PORT = process.env.PORT || 8000;

// app.use(cors());

app.use(express.json());
app.use(cors());
app.use("/auth", AuthRouter);
app.listen(PORT, (err) => {
  if (err) throw err;
  console.log(`Server is running on PORT: ${PORT}`);
});
