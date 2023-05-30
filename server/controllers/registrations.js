//Import modules
import db from "../config/sequelize-config.js";
import bcrypt from "bcrypt";
import { config } from "dotenv";
config();

async function register(req, res) {
    const { email, password, confirmation, roleId, id } = req.body;

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
            roleId: roleId,
        });

        return res.json({
            message: "Utilisateur créé avec succès",
            data: user,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Erreur lors de la création" });
    }
}

export default register;
