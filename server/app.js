//-------------------------Import modules----------------------------
import express from "express";
import cors from "cors";
import session from "express-session";
import flash from "express-flash";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import { config } from "dotenv";
import db from "./config/sequelize-config.js";
import "./auth/passport.js";

import authRouter from "./routes/auth.js";
import userRouter from "./routes/user.js";

config();
const app = express();

//--------------------------init passport----------------------------------


//---------------------------Middlewares-----------------------------------
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
app.use(methodOverride("_method"));

//---------------------------------------Routes------------------------------------
app.get("/api", (req, res) => {
    res.send("API en ligne et fonctionnelle");
});

app.use("/auth", authRouter);
app.use("/user", userRouter)

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
