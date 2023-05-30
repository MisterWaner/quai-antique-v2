//Import modules
import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Role extends Model{}

    Role.init(
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
            }
        },
        {
            modelName: "role",
            tableName: "roles",
            timestamps: false,
            sequelize
        }
    );

    return Role;
}