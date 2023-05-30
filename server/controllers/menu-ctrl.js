//Import modules
import db from "../config/sequelize-config.js";

const addMenu = async (req, res) => {
    const { id, title } = req.body;

    try {
        //Check if data is present
        if (!title) {
            return res.send("Le titre du menu est nécessaire");
        }

        //Check if menu already exist
        let menu = await db.Menu.findOne({
            where: { title: title },
            raw: true,
        });
        if (menu !== null) {
            return res.status(409).json(`Le menu ${title} existe déjà !`);
        }

        //Menu creation
        menu = await db.Menu.create({
            id: id,
            title: title,
        });

        return res.json({
            message: "Menu créé avec succès",
            data: title,
        });
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

const getAllMenus = async (req, res) => {
    try {
        const allMenus = await db.Menu.findAll();
        res.status(200).json(allMenus);
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

const getMenu = async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ message: "Il manque un paramètre" });
    }

    try {
        let menu = await db.Menu.findOne({
            where: { id: id },
            raw: true,
        });

        if (menu === null) {
            res.status(404).json({ message: "Ce menu n'existe pas" });
        }

        res.status(200).json(menu);
    } catch (error) {
        res.status(500).json({ message: "Database Error"});
        console.log(error);
    }
};

const updateMenu = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { title } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Il manque un paramètre" });
        }

        //retrieve the menu
        let menu = await db.Menu.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (menu === null) {
            res.status(404).json({ message: "Ce menu n'existe pas" });
        }

        //update
        menu = await db.Menu.update(
            {
                title: title,
                formula: [],
            },{
                where: { id: id },
            }
        );

        res.json({ message: "Menu mis à jour", data: menu });
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

const deleteMenu = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Il manque un paramètre" });
        }

        //deletation of menu
        const menu = await db.Menu.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(
            menu,
            "Ce role a été supprimé avec succès"
        );
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

export {
    addMenu,
    getAllMenus,
    getMenu,
    updateMenu,
    deleteMenu,
};