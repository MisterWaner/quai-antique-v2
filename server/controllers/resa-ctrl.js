//Import modules
import db from "../config/sequelize-config.js";

const addResa = async (req, res) => {
    try {
        const { date, quantity, children, id } = req.body;

        //Check validation for datas
        if (!date || !quantity || !children) {
            return res.send("Oops des données sont manquantes !");
        }

        //check if resa already exists
        let resa = await db.Resa.findOne({
            where: { id: id },
            raw: true,
        });
        if (resa !== null) {
            return res
                .status(409)
                .json({ message: `Cette réservation est déjà présente` });
        }

        //meal creation
        resa = await db.Resa.create({
            date: date,
            quantity: quantity,
            children: children,
            id: id,
        });
        return res.json({
            message: " Réservation créée avec succès",
            data: resa,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Database Error" });
    }
};

const getAllResas = async (req, res) => {
    try {
        const allResas = await db.Resa.findAll();
        res.status(200).json(allResas);
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

const getResa = async (req, res) => {
    const id = parseInt(req.params.id);

    //Check if id is ok
    if (!id) {
        return res.status(400).json({ message: "Paramètre manquant" });
    }

    try {
        let resa = await db.Resa.findOne({
            where: { id: id },
            raw: true,
        });

        if (resa === null) {
            res.status(404).json({
                message: "La réservation recherchée n'existe pas",
            });
        }

        res.status(200).json(resa);
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

const updateResa = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { date, quantity, children } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        //retrieve the dish
        let resa = await db.Resa.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (resa === null) {
            res.status(404).json({
                message: "L'information recherchée n'existe pas",
            });
        }

        //update
        resa = await db.Resa.update(
            {
                date: date,
                quantity: quantity,
                children: children,
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Réservation mise à jour !", data: resa });
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

const deleteResa = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Paramètre manquant" });
        }

        //deletation of user
        const resa = await db.Resa.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(resa, "Cette réservation a été supprimée avec succès");
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

export { addResa, getAllResas, getResa, updateResa, deleteResa };
