import { Router } from "express";
import {getAllUser} from "../controllers/user-ctrl.js"

const userRouter = Router();

userRouter.get('/', getAllUser);

export default userRouter;