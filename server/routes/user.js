import { Router } from "express";
import {
    getAllUser,
    getAllClients,
    getAllAdmins,
    updateUser,
    deleteUser
} from "../controllers/user-ctrl.js";

const userRouter = Router();

userRouter.get("/", getAllUser);
userRouter.get("/clients", getAllClients);
userRouter.get("/admins", getAllAdmins);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);

export default userRouter;
