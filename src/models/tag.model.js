import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Tag = sequelize.define("TagModel", {
  name: {
    type: DataTypes.STRING(20),
    allowNull: false,
  },
},{
    timestamps:false
});
