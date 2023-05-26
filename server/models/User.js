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
                primaryKey: true
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
            role: {
                type: DataTypes.ENUM,
                allowNull: true,
                values: ["admin", "client"],
                defaultValue: "client",
            }

        },
        {
            modelName: "user",
            tableName: "users",
            timestamps: false,
            sequelize
        }
    );

    return User;
}


