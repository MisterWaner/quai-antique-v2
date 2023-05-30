//Import modules
import db from "../config/sequelize-config.js";

const addCategory = async (req, res) => {
    const { id, name } = req.body;

    try {
        //Check if data is present
        if (!name) {
            return res.send("Le nom est nécessaire");
        }

        //Check if category already exist
        let category = await db.Category.findOne({
            where: { name: name },
            raw: true,
        });
        if (name !== null) {
            res.status(409).json(`La catégories ${category} existe déjà !`);
        }

        //Category creation
        category = await db.Category.create({
            id: id,
            name: name,
        });

        return res.json({
            message: "Catégorie créé avec succès",
            data: category,
        });
    } catch (error) {}
};

const getAllCategories = async (req, res) => {
    try {
        const categories = await db.Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

const getCategory = async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ message: "Il manque un paramètre" });
    }

    try {
        let category = await db.Category.findOne({
            where: { id: id },
            raw: true,
        });

        if (category === null) {
            res.status(404).json({ message: "Cette catégorie n'existe pas" });
        }

        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const updateCategory = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Il manque un paramètre" });
        }

        //retrieve the user
        let category = await db.Category.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (category === null) {
            res.status(404).json({ message: "Cette catégorie n'existe pas" });
        }

        //update
        category = await db.Category.update(
            {
                name: name,
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Catégorie mise à jour", data: category });
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Il manque un paramètre" });
        }

        //deletation of user
        const category = await db.Category.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(
            category,
            "Cette catégorie a été supprimée avec succès"
        );
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

export {
    addCategory,
    getAllCategories,
    getCategory,
    updateCategory,
    deleteCategory,
};
