//Import modules
import { DataTypes, Model } from "sequelize";

export default (sequelize) => {
    class Reservation extends Model{}

    Reservation.init(
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            date: {
                type: DataTypes.DATEONLY,
                allowNull: false,
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
        }, {
            modelName: "reservation",
            tableName: "reservations",
            timestamps: false,
            sequelize,
        }
    );
    
    return Reservation;
}