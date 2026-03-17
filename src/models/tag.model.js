import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

const tipo = type.DataTypes
export const Tag = sequelize.define(
    "TagModel", {
    name: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    content: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    status: {
        type: DataTypes.ENUM("archived", "published"),
        defaultValue: "published"
    },
    price: {
        type: DataTypes.FLOAT(10),
        allowNull: false
    }
}
)