//Import modules
import db from "../config/sequelize-config.js";

const addRole = async (req, res) => {
    const { id, name } = req.body;

    try {
        //Check if data is present
        if (!name) {
            return res.send("Le nom est nécessaire");
        }

        //Check if role already exist
        let role = await db.Role.findOne({
            where: { name: name },
            raw: true,
        });
        if (role !== null) {
            return res.status(409).json(`Le role ${name} existe déjà !`);
        }

        //Role creation
        role = await db.Role.create({
            id: id,
            name: name,
        });

        return res.json({
            message: "Role créé avec succès",
            data: role,
        });
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

const getAllRoles = async (req, res) => {
    try {
        const allRoles = await db.Role.findAll();
        res.status(200).json(allRoles);
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

const getRole = async (req, res) => {
    const id = parseInt(req.params.id);

    if (!id) {
        return res.status(400).json({ message: "Il manque un paramètre" });
    }

    try {
        let role = await db.Role.findOne({
            where: { id: id },
            raw: true,
        });

        if (role === null) {
            res.status(404).json({ message: "Ce role n'existe pas" });
        }

        res.status(200).json(role);
    } catch (error) {
        res.status(500).json({ message: "Database Error"});
        console.log(error);
    }
};

const updateRole = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const { name } = req.body;

        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Il manque un paramètre" });
        }

        //retrieve the role
        let role = await db.Role.findOne(req.body, {
            where: { id: id },
            raw: true,
        });

        if (role === null) {
            res.status(404).json({ message: "Ce role n'existe pas" });
        }

        //update
        role = await db.Role.update(
            {
                name: name,
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Role mis à jour", data: role });
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

const deleteRole = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Il manque un paramètre" });
        }

        //deletation of user
        const role = await db.Role.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(
            role,
            "Ce role a été supprimé avec succès"
        );
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

export {
    addRole,
    getAllRoles,
    getRole,
    updateRole,
    deleteRole,
};