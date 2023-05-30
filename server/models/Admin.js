//Import modules
import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Admin extends Model{}

    Admin.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            }
        },
        {
            modelName: "admin",
            tableName: "admins",
            timestamps: false,
            sequelize
        }
    );

    return Admin;
}