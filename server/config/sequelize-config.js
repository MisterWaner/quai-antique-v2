import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

//Import models
import User from "../models/User.js";
import Images from "../models/Images.js";
import Meal from "../models/Meal.js";
import Category from "../models/Category.js";
import Formula from "../models/Formula.js";
import Menu from "../models/Menu.js";
import Menu_Formula from "../models/Menu_Formula.js";
import Information from "../models/Information.js";
import Slot from "../models/Slot.js";
import Resa from "../models/Resa.js";
import Role from "../models/Role.js";

//Create connection between sequelize and db
const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
    }
);

//Relation initialization
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.User = User(sequelize);
db.Images = Images(sequelize);
db.Meal = Meal(sequelize);
db.Category = Category(sequelize);
db.Formula = Formula(sequelize);
db.Menu = Menu(sequelize);
db.Menu_Formula = Menu_Formula(sequelize);
db.Information = Information(sequelize);
db.Slot = Slot(sequelize);
db.Resa = Resa(sequelize);
db.Role = Role(sequelize);

//relations
Role.User = db.Role.hasMany(db.User, {
    as: "users",
    foreignKey: {
        name: "roleId",
        allowNull: false,
        defaultValue: "2"
    },
    sourceKey: "id"
});
User.Role = db.User.belongsTo(db.Role);

User.Resa = db.User.hasMany(db.Resa, {
    foreignKey: {
        name: "userId",
        allowNull: false,
    },
    sourceKey: "id",
});
Resa.User = db.Resa.belongsTo(db.User);

Slot.Resa = db.Slot.hasMany(db.Resa, {
    foreignKey: {
        name: "slotId",
        allowNull: false,
    },
    sourceKey: "id",
});
Resa.Slot = db.Resa.belongsTo(db.Slot);

Category.Meal = db.Category.hasMany(db.Meal, {
    foreignKey: {
        name: "categoryId",
        allowNull: false,
    },
    sourceKey: "id",
});
Meal.Category = db.Meal.belongsTo(db.Category);

Menu.Formula = db.Menu.belongsToMany(db.Formula, {
    foreignKey: {
        name: "menuId",
        allowNull: false,
    },
    sourceKey: "id",
    through: db.Menu_Formula,
});
Formula.Menu = db.Formula.belongsToMany(db.Menu, {
    foreignKey: {
        name: "formulaId",
        allowNull: false,
    },
    sourceKey: "id",
    through: db.Menu_Formula,
});

db.sequelize.sync({ alter: true });

export default db;
