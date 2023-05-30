//Import modules
import db from "../config/sequelize-config.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (!email || !password) {
            return res.send("Données manquantes");
        }

        //retrieve user
        let user = await db.User.findOne({
            where: { email: email },
            raw: true,
        });
        if (!user) {
            res.status(400).json({ message: "Cette utilisateur n'existe pas" });
        }

        //Check password
        const validPwd = (enteredPwd, originalPwd) => {
            return new Promise((resolve) => {
                bcrypt.compare(enteredPwd, originalPwd, (error, res) => {
                    resolve(res);
                });
            });
        };
        if (!validPwd) {
            return res.status(401).json({ message: "Mot de passe invalide" });
        }

        //Setup token
        const maxAge = 1 * 60 * 60;
        const jwtToken = jwt.sign(
            {
                id: user.id,
                email: user.email,
            },
            process.env.JWT_SECRET,
            { expiresIn: maxAge }
        );

        res.json({ message: "Bienvenue !", token: jwtToken });
    } catch (error) {
        res.status(500).json("Database Error");
        console.log(error);
    }
};

export default login;