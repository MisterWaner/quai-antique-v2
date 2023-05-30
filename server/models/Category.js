//Import modules
import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Category extends Model {}

    Category.init(
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
        },
        {
            modelName: "category",
            tableName: "categories",
            timestamps: false,
            sequelize,
        }
    );

    return Category;
};
