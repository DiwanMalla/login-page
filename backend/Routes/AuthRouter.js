import e from "express";

import {
  signInValidation,
  signUpValidation,
} from "../Middleware/AuthValidation.js";
import { signIn, signup } from "../Controllers/AuthController.js";
const router = e.Router();

router.route("/signin").post(signInValidation, signIn);

router.route("/signup").post(signUpValidation, signup);

export default router;
