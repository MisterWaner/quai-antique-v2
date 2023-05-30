//Import modules
import db from "../config/sequelize-config.js";

const addSlot = async (req, res) => {
    try {
        const { day, hour, id } = req.body;

        //Check validation for datas
        if (!day || !hour) {
            return res.send("Oops des données sont manquantes !");
        }

        //check if slot already exists
        let slot = await db.Slot.findOne({
            where: { id: id },
            raw: true,
        });
        if (slot !== null) {
            return res
                .status(409)
                .json({ message: `Ce créneau est déjà présent` });
        }

        //meal creation
        slot = await db.Slot.create({
            day: day,
            hour: hour,
            id: id,
        });
        return res.json({
            message: " Créneau créé avec succès",
            data: slot,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Database Error" });
    }
};

const getAllSlot = async (req, res) => {
    try {
        const allSlots = await db.Slot.findAll();
        res.status(200).json(allSlots);
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

const getSlot = async (req, res) => {
    const id = parseInt(req.params.id);

    //Check if id is ok
    if (!id) {
        return res.status(400).json({ message: "Paramètre manquant" });
    }

    try {
        let slot = await db.Slot.findOne({
            where: { id: id },
            raw: true,
        });

        if (slot === null) {
            res.status(404).json({
                message: "Le créneau recherché n'existe pas",
            });
        }

        res.status(200).json(slot);
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

const updateSlot = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { day, hour } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        //retrieve the dish
        let slot = await db.Slot.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (slot === null) {
            res.status(404).json({
                message: "Le créneau recherché n'existe pas",
            });
        }

        //update
        slot = await db.Slot.update(
            {
                day: day,
                hour: hour
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Créneau mis à jour !", data: slot });
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

const deleteSlot = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Paramètre manquant" });
        }

        //deletation of user
        const slot = await db.Slot.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(
            slot,
            "Ce créneau a été supprimé avec succès"
        );
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

export { addSlot, getAllSlot, getSlot, updateSlot, deleteSlot };
