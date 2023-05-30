//Import modules
import { Router } from "express";
import {
    addInfo,
    getAllInfos,
    getInfo,
    updateInfo,
    deleteInfo,
} from "../controllers/info-ctrl.js";

const infoRouter = Router();

infoRouter.get("/", getAllInfos);
infoRouter.get("/:id", getInfo);
infoRouter.post("/", addInfo);
infoRouter.put("/:id", updateInfo);
infoRouter.delete("/:id", deleteInfo);

export default infoRouter;


