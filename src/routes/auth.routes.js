import { Router } from "express";
import {
  register,
  login,
  profile,
  logout,
} from "../controllers/auth.controller.js";
import { authRequired } from "../middlewares/authValidator.js";
import { validateSchema } from '../middlewares/schemaValidator.js'
import { registerShema } from '../schemas/auth.schema.js'

const router = Router();

router.post("/register", validateSchema(registerShema), register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/profile", authRequired, profile);

export default router;
