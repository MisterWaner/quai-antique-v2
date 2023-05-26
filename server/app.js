import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { config } from "dotenv";
import db from "./db/sequelize.config.js";

config();
const app = express();

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
app.use(express.urlencoded({ extended: true }));
app.use(
    cookieParser({
        origin: "*",
        methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
        allowedHeaders:
            "Origin, X-Requested-With, x-access-token, role, Content, Accept, Content-Type, Authorization",
    })
);

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
