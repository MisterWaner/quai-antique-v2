//Import modules
import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Meal extends Model {}

    Meal.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            title: {
                type: DataTypes.STRING(100),
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
            modelName: "meal",
            tableName: "meals",
            timestamps: false,
            sequelize,
        }
    );

    return Meal;
};
