import { Sequelize } from "sequelize";
import { config } from "dotenv";
config();

//Import models
import User from "../models/User.js";
import Client from "../models/Client.js";
import Admin from "../models/Admin.js";
import Images from "../models/Images.js";
import Meal from "../models/Meal.js";
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
db.Client = Client(sequelize)
db.Admin = Admin(sequelize);
db.Images = Images(sequelize);
db.Meal = Meal(sequelize);
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
    foreignKey: {
        name: "userId",
        allowNull: false,
    },
    sourceKey: "id",
    scope: { role: "client" },
});
db.User.hasMany(db.Admin, {
    as: "admins",
    foreignKey: {
        name: "userId",
        allowNull: false,
    },
    sourceKey: "id",
    scope: { role: "admin" },
});

db.Client.hasMany(db.Resa, {
    foreignKey: {
        name: "clientId",
        allowNull: false,
    },
    sourceKey: "id",
});
db.Resa.belongsTo(db.Client);
db.Slot.hasMany(db.Resa, {
    foreignKey: {
        name: "slotId",
        allowNull: false,
    },
    sourceKey: "id",
});
db.Resa.belongsTo(db.Slot);
db.Admin.hasMany(db.Permission, {
    foreignKey: {
        name: "adminId",
        allowNull: false,
    },
    sourceKey: "id",
});
db.Permission.belongsTo(db.Admin);
db.Category.hasMany(db.Meal, {
    foreignKey: {
        name: "categoryId",
        allowNull: false,
    },
    sourceKey: "id",
});
db.Meal.belongsTo(db.Category);
db.Menu.belongsToMany(db.Formula, {
    foreignKey: {
        name: "menuId",
        allowNull: false,
    },
    sourceKey: "id",
    through: db.Menu_Formula,
});
db.Formula.belongsToMany(db.Menu, {
    foreignKey: {
        name: "formulaId",
        allowNull: false,
    },
    sourceKey: "id",
    through: db.Menu_Formula,
});

db.Permission.hasMany(db.Category, {
    foreignKey: {
        name: "permissionId",
        allowNull: false,
    },
    sourceKey: "id",
});
db.Category.belongsTo(db.Permission);
db.Permission.hasMany(db.Meal, {
    foreignKey: {
        name: "permissionId",
        allowNull: false,
    },
    sourceKey: "id",
});
db.Meal.belongsTo(db.Permission);
db.Permission.hasMany(db.Formula, {
    foreignKey: {
        name: "permissionId",
        allowNull: false,
    },
    sourceKey: "id",
});
db.Formula.belongsTo(db.Permission);
db.Permission.hasMany(db.Menu, {
    foreignKey: {
        name: "permissionId",
        allowNull: false,
    },
    sourceKey: "id",
});
db.Menu.belongsTo(db.Permission);
db.Permission.hasMany(db.Information, {
    foreignKey: {
        name: "permissionId",
        allowNull: false,
    },
    sourceKey: "id",
});
db.Information.belongsTo(db.Permission);
db.Permission.hasMany(db.Images, {
    foreignKey: {
        name: "permissionId",
        allowNull: false,
    },
    sourceKey: "id",
});
db.Images.belongsTo(db.Permission);

db.sequelize.sync({ alter: true });

export default db;
