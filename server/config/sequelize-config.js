import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

//Import models
import User from "../models/User.js";
import Client from "../models/Client.js";
import Admin from "../models/Admin.js";
import Images from "../models/Images.js";
import Dish from "../models/Dish.js";
import Category from "../models/Category.js";
import Formula from "../models/Formula.js";
import Menu from "../models/Menu.js";
import Menu_Formula from "../models/Menu_Formula.js";
import Information from "../models/Information.js";
import Permission from "../models/Permission.js";
import Slot from "../models/Slot.js";
import Resa from "../models/Resa.js";

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
db.Client = Client(sequelize);
db.Admin = Admin(sequelize);
db.Images = Images(sequelize);
db.Dish = Dish(sequelize);
db.Category = Category(sequelize);
db.Formula = Formula(sequelize);
db.Menu = Menu(sequelize);
db.Menu_Formula = Menu_Formula(sequelize);
db.Information = Information(sequelize);
db.Permission = Permission(sequelize);
db.Slot = Slot(sequelize);
db.Resa = Resa(sequelize);

//Inheritance between User, Client and Admin
db.User.hasMany(db.Client, {
    as: "clients",
    foreignKey: "userId",
    sourceKey: "id",
    scope: { role: "client" },
});
db.User.hasMany(db.Admin, {
    as: "admins",
    foreignKey: "userId",
    sourceKey: "id",
    scope: { role: "admin" },
});

db.Client.hasMany(db.Resa, {foreignKey: "clientId", sourceKey: "id"});
db.Resa.belongsTo(db.Client);
db.Slot.hasMany(db.Resa, {foreignKey: "slotId", sourceKey: "id"});
db.Resa.belongsTo(db.Slot);
db.Admin.hasMany(db.Permission, {foreignKey: "adminId", sourceKey: "id"});
db.Permission.belongsTo(db.Admin);
db.Category.hasMany(db.Dish, {foreignKey: "categoryId", sourceKey: "id"});
db.Dish.belongsTo(db.Category);
db.Menu.belongsToMany(db.Formula, { through: db.Menu_Formula });
db.Formula.belongsToMany(db.Menu, { through: db.Menu_Formula });

db.Permission.hasMany(db.Category, {foreignKey: "permissionId", sourceKey: "id"});
db.Category.belongsTo(db.Permission);
db.Permission.hasMany(db.Dish, {foreignKey: "permissionId", sourceKey: "id"});
db.Dish.belongsTo(db.Permission);
db.Permission.hasMany(db.Formula, {foreignKey: "permissionId", sourceKey: "id"});
db.Formula.belongsTo(db.Permission);
db.Permission.hasMany(db.Menu, {foreignKey: "permissionId", sourceKey: "id"});
db.Menu.belongsTo(db.Permission);
db.Permission.hasMany(db.Information, {foreignKey: "permissionId", sourceKey: "id"});
db.Information.belongsTo(db.Permission);
db.Permission.hasMany(db.Images, {foreignKey: "permissionId", sourceKey: "id"});
db.Images.belongsTo(db.Permission);

db.sequelize.sync({ alter: true });

export default db;
