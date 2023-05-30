//import modules
import { Router } from "express";
import {
    getAllImages,
    getImage,
    addImage,
    updateImage,
    deleteImage,
} from "../controllers/images-ctrl.js";

const imageRouter = Router();

imageRouter.get('/', getAllImages);
imageRouter.get('/:id', getImage);
imageRouter.post('/', addImage);
imageRouter.put('/:id', updateImage);
imageRouter.delete('/:id', deleteImage);

export default imageRouter;