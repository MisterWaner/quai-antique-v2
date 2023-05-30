//import modules
import { Router } from "express";
import {
    getAllRoles,
    getRole,
    addRole,
    updateRole,
    deleteRole,
} from "../controllers/role-ctrl.js";

const roleRouter = Router();

roleRouter.get('/', getAllRoles);
roleRouter.get('/:id', getRole);
roleRouter.post('/', addRole);
roleRouter.put('/:id', updateRole);
roleRouter.delete('/:id', deleteRole);

export default roleRouter;