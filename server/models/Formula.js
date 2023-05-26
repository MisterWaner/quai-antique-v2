//Import modules
import { DataTypes, Model } from "sequelize";
import Permission from "./Permission.js";

export default (sequelize) => {
    class Formula extends Model {}

    Formula.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            price: {
                type: DataTypes.FLOAT(4, 2).UNSIGNED,
                allowNull: false,
            },
        },
        {
            modelName: "formula",
            tableName: "formulas",
            timestamps: false,
            sequelize,
        }
    );

    return Formula;
};
