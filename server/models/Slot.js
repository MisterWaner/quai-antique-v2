//Import modules
import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Slot extends Model {}

    Slot.init(
        {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            day: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            hour: {
                type: DataTypes.TIME,
                allowNull: false,
                defaultValue: "12:00:00",
            },
        },
        {
            modelName: "slot",
            tableName: "slots",
            timestamps: false,
            sequelize,
        }
    );

    return Slot;
};
