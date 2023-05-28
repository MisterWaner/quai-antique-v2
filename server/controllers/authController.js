//Import modules
import db from "../config/sequelize-config.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
import jwt from "jsonwebtoken";
config();

//register
const register = async (req, res) => {
    const { email, password, confirmation, role, id } = req.body;

    try {
        //Check Validation for datas
        if (!email || !password || !confirmation) {
            return res.send("Données manquantes");
        } else if (password !== confirmation) {
            return res.status(400).json({
                message: "Les mots de passes doivent être identiques",
            });
        }

        //Check if User already exists
        let user = await db.User.findOne({
            where: { email: email },
            raw: true,
        });
        if (user !== null) {
            return res.status(409).json(`L'utilisateur ${email} existe déjà !`);
        }

        //Hash password
        db.User.beforeCreate(async (user, options) => {
            let hash = await bcrypt.hash(
                user.password,
                parseInt(process.env.BCRYPT_SALT_ROUND)
            );
            user.password = hash;
            user.confirmation = user.password;
        });

        //User creation
        user = await db.User.create({
            id: id,
            email: email,
            password: password,
            confirmation: confirmation,
            role: role,
        });

        if (user.role === "admin") {
            let admin;
            user = admin;
        } else if (user.role === "client") {
            let client;
            user = client;
        }

        return res.json({
            message: "Utilisateur créé avec succès",
            data: user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Erreur lors de la création" });
    }
};

//Login
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
    } catch (error) {}
};

//logout
const logout = () => {};

export { register, login, logout };
