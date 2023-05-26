//Import modules
import { DataTypes, Model } from "sequelize";
import Permission from "./Permission.js";

export default (sequelize) => {
    class Menu extends Model {}

    Menu.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
            modelName: "menu",
            tableName: "menus",
            timestamps: false,
            sequelize,
        }
    );

    return Menu;
};
