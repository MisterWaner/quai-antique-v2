//import modules
import { Router } from "express";
import {
    getAllMenus,
    getMenu,
    addMenu,
    updateMenu,
    deleteMenu,
} from "../controllers/menu-ctrl.js";

const menuRouter = Router();

menuRouter.get('/', getAllMenus);
menuRouter.get('/:id', getMenu);
menuRouter.post('/', addMenu);
menuRouter.put('/:id', updateMenu);
menuRouter.delete('/:id', deleteMenu);

export default menuRouter;