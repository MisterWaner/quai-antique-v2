//Import modules
import { Router } from "express";
import {
    addResa,
    getAllResas,
    getResa,
    updateResa,
    deleteResa,
} from "../controllers/resa-ctrl.js";

const resaRouter = Router();

resaRouter.get("/", getAllResas);
resaRouter.get("/:id", getResa);
resaRouter.post("/", addResa);
resaRouter.put("/:id", updateResa);
resaRouter.delete("/:id", deleteResa);

export default resaRouter;
