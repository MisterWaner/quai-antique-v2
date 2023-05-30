//import modules
import { Router } from "express";
import {
    getAllCategories,
    getCategory,
    addCategory,
    updateCategory,
    deleteCategory,
} from "../controllers/category-ctrl.js";

const categoryRouter = Router();

categoryRouter.get('/', getAllCategories);
categoryRouter.get('/:id', getCategory);
categoryRouter.post('/', addCategory);
categoryRouter.put('/:id', updateCategory);
categoryRouter.delete('/:id', deleteCategory);

export default categoryRouter;
