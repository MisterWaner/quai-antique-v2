//Import modules
import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class User extends Model {}

    User.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                allowNull: false,
                primaryKey: true,
            },
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: true, //data validation
                },
                allowNull: false,
                unique: true, //unique email
            },
            password: {
                type: DataTypes.STRING(64),
                is: /^[0-9a-z]{64}$/i, //constraint regex
                allowNull: false,
            },
            confirmation: {
                type: DataTypes.STRING(64),
                is: /^[0-9a-z]{64}$/i, //constraint regex
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
            modelName: "user",
            tableName: "users",
            timestamps: false,
            sequelize,
        }
    );

    return User;
};
