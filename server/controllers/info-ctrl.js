//Import modules
import db from "../config/sequelize-config.js";

const addInfo = async (req, res) => {
    try {
        const {
            day,
            midiStart,
            midiClose,
            soirStart,
            soirClose,
            isOpenMidi,
            isOpenSoir,
            maximumCapacity,
            id,
        } = req.body;

        //Check validation for datas
        if (
            !day ||
            !midiStart ||
            !midiClose ||
            !soirStart ||
            !soirClose ||
            !isOpenMidi ||
            !isOpenSoir ||
            !maximumCapacity
        ) {
            return res.send("Oops des données sont manquantes !");
        }

        //check if meal already exists
        let info = await db.Information.findOne({
            where: { day: day },
            raw: true,
        });
        if (info !== null) {
            return res
                .status(409)
                .json({ message: `Cette information est déjà présente` });
        }

        //meal creation
        info = await db.Information.create({
            day: day,
            midiStart: midiStart,
            midiClose: midiClose,
            soirStart: soirStart,
            soirClose: soirClose,
            isOpenMidi: isOpenMidi,
            isOpenSoir: isOpenSoir,
            maximumCapacity: maximumCapacity,
            id: id,
        });
        return res.json({
            message: " Information créée avec succès",
            data: info,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Database Error" });
    }
};

const getAllInfos = async (req, res) => {
    try {
        const allInfos = await db.Information.findAll();
        res.status(200).json(allInfos);
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

const getInfo = async (req, res) => {
    const id = parseInt(req.params.id);

    //Check if id is ok
    if (!id) {
        return res.status(400).json({ message: "Paramètre manquant" });
    }

    try {
        let info = await db.Information.findOne({
            where: { id: id },
            raw: true,
        });

        if (info === null) {
            res.status(404).json({
                message: "L'information recherchée n'existe pas",
            });
        }

        res.status(200).json(info);
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

const updateInfo = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {
            day,
            midiStart,
            midiClose,
            soirStart,
            soirClose,
            isOpenMidi,
            isOpenSoir,
            maximumCapacity,
        } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Paramètres manquants" });
        }

        //retrieve the dish
        let info = await db.Information.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (info === null) {
            res.status(404).json({
                message: "L'information recherchée n'existe pas",
            });
        }

        //update
        info = await db.Information.update(
            {
                day: day,
                midiStart: midiStart,
                midiClose: midiClose,
                soirStart: soirStart,
                soirClose: soirClose,
                isOpenMidi: isOpenMidi,
                isOpenSoir: isOpenSoir,
                maximumCapacity: maximumCapacity,
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Information mise à jour !", data: info });
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

const deleteInfo = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Paramètre manquant" });
        }

        //deletation of user
        const info = await db.Information.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(info, "Ce plat a été supprimé avec succès");
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

export { addInfo, getAllInfos, getInfo, updateInfo, deleteInfo };
