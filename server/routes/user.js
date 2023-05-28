import { Router } from "express";
import {getAllUser} from "../controllers/userController.js"

const userRouter = Router();

userRouter.get('/', getAllUser);

export default userRouter;