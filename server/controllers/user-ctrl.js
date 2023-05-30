//import modules
import db from "../config/sequelize-config.js";
import { config } from "dotenv";

config();

//Read
const getAllUser = async (req, res) => {
    try {
        const users = await db.User.findAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

const updateUser = async (req, res) => {
    try {
        const { id } = req.params.id;
        const { firstname, lastname, quantity, children, allergies, phone } =
            req.body;
        //Check if id is ok
        if (!id) {
            return res.status(400).json({ message: "Paramètre manquant" });
        }

        //retrieve the user
        let user = await db.User.findOne(req.body, {
            where: { id: id },
            raw: true,
        });     
        
        if (user === null) {
            res.status(404).json({
                message: "L'utilisateur recherché n'existe pas",
            });
        }

        //update
        user = await db.User.update(
            {
                firstname: firstname,
                lastname: lastname,
                quantity: quantity,
                children: children,
                allergies: allergies,
                phone: phone
            },
            {
                where: { id: id },
            }
        );

        res.json({ message: "Utilisateur à jour !", data: user });
    } catch (error) {}
};

const getAllClients = async (req, res) => {
    try {
        const allClients = await db.User.findAll({ where: { roleId: 2 } });
        res.status(200).json(allClients);
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

const getAllAdmins = async (req, res) => {
    try {
        const allAdmins = await db.User.findAll({ where: { roleId: 1 } });
        res.status(200).json(allAdmins);
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

const deleteUser = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        //Check if id is OK
        if (!id) {
            return res.status(400).json({ message: "Paramètre manquant" });
        }

        //deletation of user
        const user= await db.User.destroy({
            where: { id: id },
            force: true,
        });
        res.status(200).json(user, "Cet utilisateur a été supprimé avec succès");
    } catch (error) {
        res.status(500).json({ message: "Database Error" });
        console.log(error);
    }
};

export { getAllUser, getAllClients, getAllAdmins, updateUser, deleteUser };
