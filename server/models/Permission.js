//Import modules
import { DataTypes, Model } from "sequelize";
import Admin from "./Admin.js";

export default (sequelize) => {
    class Permission extends Model{}

    Permission.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false
            },
        }, {
            modelName: "permission",
            tableName: "permissions",
            timestamps: false,
            sequelize,
        }
    );

    return Permission;
}