//Import modules
import { Router } from "express";
import login from "../controllers/login.js";
import register from "../controllers/registrations.js";

const authRouter = Router();

authRouter.post('/register', register);
authRouter.post('/login', login);

export default authRouter;