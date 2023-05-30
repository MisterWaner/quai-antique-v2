//Import modules
import db from "../config/sequelize-config.js";

const addFormula = async (req, res) => {
    const { id, name, description, price } = req.body;

    try {
        //Check if data is present
        if (!name || !description || !price) {
            return res.send("Il manque des informations");
        }

        //Check if formula already exist
        let formula = await db.Formula.findOne({
            where: { name: name },
            raw: true,
        });
        if (formula !== null) {
            return res.status(409).json(`La formule ${name} existe déjà !`);
        }

        //Formula creation
        formula = await db.Formula.create({
            id: id,
            name: name,
            description: description,
            price: price,
        });

        return res.json({
            message: "Formule créé avec succès",
            data: formula,
        });
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

const getAllFormulas = async (req, res) => {
    try {
        const allFormulas = await db.Formula.findAll();
        res.status(200).json(allFormulas);
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

const getFormula = async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ message: "Il manque un paramètre" });
    }

    try {
        let formula = await db.Formula.findOne({
            where: { id: id },
            raw: true,
        });

        if (formula === null) {
            res.status(404).json({ message: "Cette formule n'existe pas" });
        }

        res.status(200).json(formula);
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

const updateFormula = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name, description, price } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Il manque un paramètre" });
        }

        //retrieve the formula
        let formula = await db.Formula.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (formula === null) {
            res.status(404).json({ message: "Cette formule n'existe pas" });
        }

        //update
        formula = await db.Formula.update(
            {
                name: name,
                description: description,
                price: price,
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Formule mise à jour", data: formula });
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

const deleteFormula = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Il manque un paramètre" });
        }

        //deletation of formula
        const formula = await db.Formula.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(formula, "Cette formule a été supprimée avec succès");
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

export { addFormula, getAllFormulas, getFormula, updateFormula, deleteFormula };
