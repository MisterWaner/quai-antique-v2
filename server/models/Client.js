//Import modules
import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Client extends Model {}

    Client.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            firstname: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            lastname: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            quantity: {
                type: DataTypes.SMALLINT.UNSIGNED,
                allowNull: false,
                defaultValue: 1,
            },
            children: {
                type: DataTypes.SMALLINT.UNSIGNED,
                allowNull: false,
                defaultValue: 0,
            },
            allergies: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            phone: {
                type: DataTypes.STRING,
                allowNull: true,
                unique: true,
            },
            
        },
        {
            modelName: "client",
            tableName: "clients",
            timestamps: false,
            sequelize,
        }
    );

    return Client;
};
