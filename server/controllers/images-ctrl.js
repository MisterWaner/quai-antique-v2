//Import modules
import db from "../config/sequelize-config.js";

const addImage = async (req, res) => {
    try {
        const { title, url, id } = req.body;

        //Check validation for datas
        if (!title || !url) {
            return res.send("Oops des données sont manquantes !");
        }

        //check if slot already exists
        let image = await db.Images.findOne({
            where: { url: url },
            raw: true,
        });
        if (image !== null) {
            return res
                .status(409)
                .json({ message: `Cette image est déjà présente` });
        }

        //meal creation
        image = await db.Images.create({
            title: title,
            url: url,
            id: id,
        });
        return res.json({
            message: " Image ajoutée avec succès",
            data: image,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Database Error" });
    }
};

const getAllImages = async (req, res) => {
    try {
        const allImages = await db.Images.findAll();
        res.status(200).json(allImages);
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

const getImage = async (req, res) => {
    const id = parseInt(req.params.id);

    //Check if id is ok
    if (!id) {
        return res.status(400).json({ message: "Paramètre manquant" });
    }

    try {
        let image = await db.Images.findOne({
            where: { id: id },
            raw: true,
        });

        if (image === null) {
            res.status(404).json({
                message: "L'image recherchée n'existe pas",
            });
        }

        res.status(200).json(slot);
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

const updateImage = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, url } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        //retrieve the image
        let image = await db.Images.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (image === null) {
            res.status(404).json({
                message: "L'image recherchée n'existe pas",
            });
        }

        //update
        image = await db.Images.update(
            {
                title: title,
                url: url
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Image mise à jour !", data: image });
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

const deleteImage = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Paramètre manquant" });
        }

        //deletation of image
        const image = await db.Images.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(
            image,
            "Image supprimée avec succès"
        );
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

export { addImage, getAllImages, getImage, updateImage, deleteImage };
