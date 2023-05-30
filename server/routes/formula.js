//import modules
import { Router } from "express";
import {
    getAllFormulas,
    getFormula,
    addFormula,
    updateFormula,
    deleteFormula,
} from "../controllers/formula-ctrl.js";

const formulaRouter = Router();

formulaRouter.get('/', getAllFormulas);
formulaRouter.get('/:id', getFormula);
formulaRouter.post('/', addFormula);
formulaRouter.put('/:id', updateFormula);
formulaRouter.delete('/:id', deleteFormula);

export default formulaRouter;