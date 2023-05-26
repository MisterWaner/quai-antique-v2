//Import modules
import { DataTypes, Model } from "sequelize";
import Menu from "./Menu.js";
import Formula from "./Formula.js";

export default (sequelize) => {
    class Menu_Formula extends Model {}

    Menu_Formula.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            menuId: {
                type: DataTypes.INTEGER,
                references: {
                    model: Menu,
                    key: "id",
                },
            },
            formulaId: {
                type: DataTypes.SMALLINT,
                references: {
                    model: Formula,
                    key: "id",
                },
            },
        },
        {
            modelName: "menu_formula",
            tableName: "menus_formulas",
            timestamps: false,
            sequelize,
        }
    );

    return Menu_Formula;
};
