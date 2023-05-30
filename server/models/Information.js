//Import modules
import { DataTypes, Model } from "sequelize";
import Permission from "./Permission.js";

export default (sequelize) => {
    class Information extends Model {}

    Information.init(
        {
            id: {
                type: DataTypes.INTEGER(4),
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            day: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            midiStart: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            midiClose: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            soirStart: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            soirClose: {
                type: DataTypes.TIME,
                allowNull: true,
            },
            isOpenMidi: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            isOpenSoir: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
            },
            maximumCapacity: {
                type: DataTypes.INTEGER(2),
                allowNull: false,
                defaultValue: 60,
            },
        },
        {
            modelName: "information",
            tableName: "informations",
            timestamps: false,
            sequelize,
        }
    );

    return Information;
};
