//Import modules
import { Router } from "express";
import {
    getAllMeals,
    getMeal,
    addMeal,
    updateMeal,
    deleteMeal,
} from "../controllers/meal-ctrl.js";

const mealRouter = Router();

mealRouter.get("/", getAllMeals);
mealRouter.get("/:id", getMeal);
mealRouter.post("/", addMeal);
mealRouter.put("/:id", updateMeal);
mealRouter.delete("/:id", deleteMeal);

export default mealRouter;
