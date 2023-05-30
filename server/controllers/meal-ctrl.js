//Import modules
import db from "../config/sequelize-config.js";

const addMeal = async (req, res) => {
    try {
        const { title, description, price, id } = req.body;

        //Check validation for datas
        if (!title || !description || !price) {
            return res.send("Oops des données sont manquantes !");
        }

        //check if meal already exists
        let meal = await db.Meal.findOne({
            where: { title: title },
            raw: true,
        });
        if (meal !== null) {
            return res
                .status(409)
                .json({ message: `Ce plat ${title} existe déjà` });
        }

        //meal creation
        meal = await db.Meal.create({
            id: id,
            title: title,
            description: description,
            price: price,
        });
        return res.json({ message: " Plat créé avec succès", data: meal });
    } catch (error) {
        return res.status(500).json({ message: "Database Error", error });
    }
};

const getAllMeals = async (req, res) => {
    try {
        const allMeals = await db.Meal.findAll();
        res.status(200).json(allMeals);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const getMeal = async (req, res) => {
    const id = parseInt(req.params.id);

    //Check if id is ok
    if (!id) {
        return res.status(400).json({ message: "Paramètre manquant" });
    }

    try {
        let meal = await db.Meal.findOne({
            where: { id: id },
            raw: true,
        });

        if (meal === null) {
            res.status(404).json({ message: "Ce plat n'existe pas !" });
        }

        res.status(200).json(meal);
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const updateMeal = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title, description, price } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        //retrieve the dish
        let meal = await db.Meal.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (meal === null) {
            res.status(404).json({ message: "Ce plat n'existe pas" });
        }

        //update
        meal = await db.Meal.update(
            {
                title: title,
                description: description,
                price: price,
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Plat mis à jour !", data: meal });
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

const deleteMeal = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Paramètre manquant" });
        }

        //deletation of user
        const meal = await db.Meal.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(meal, "Ce plat a été supprimé avec succès");
    } catch (error) {
        res.status(500).json({ message: "Database Error", error });
    }
};

export { addMeal, getAllMeals, getMeal, updateMeal, deleteMeal };
