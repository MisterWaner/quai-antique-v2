//Import modules
import { Router } from "express";
import {
    addSlot,
    getAllSlot,
    getSlot,
    updateSlot,
    deleteSlot,
} from "../controllers/slot-ctrl.js";

const slotRouter = Router();

slotRouter.get("/", getAllSlot);
slotRouter.get("/:id", getSlot);
slotRouter.post("/", addSlot);
slotRouter.put("/:id", updateSlot);
slotRouter.delete("/:id", deleteSlot);

export default slotRouter;
