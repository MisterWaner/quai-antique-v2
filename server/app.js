import express from "express";
import cors from "cors";
import session from "express-session";
import flash from "express-flash";
import passport from "passport";
import cookieParser from "cookie-parser";
import methodOverride from "method-override"
import { config } from "dotenv";
import db from "./config/sequelize-config.js";

config();
const app = express();

//init passport
import initialize from "./config/passport-config.js";

initialize(
    passport,
    (email) => {
        db.User.findOne({ where: { email: email } });
    },
    (id) => {
        db.User.findByPk(id);
    }
);

//Middlewares
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders:
            "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization",
    })
);
app.use(express.json());
app.use(flash());
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
app.use(express.urlencoded({ extended: true }));
app.use(
    cookieParser({
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders:
            "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization",
    })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(methodOverride('_method'));

//fetch main route
app.get("/api", (req, res) => {
    res.send("API en ligne et fonctionnelle");
});

//start server with sequelize authentication
db.sequelize
    .authenticate()
    .then(() => console.log("db is connected"))
    .then(() => {
        app.listen(process.env.SERVER_PORT, () => {
            console.log(`Server is running on port ${process.env.SERVER_PORT}`);
        });
    })
    .catch((err) => console.log("error occured :", err));
