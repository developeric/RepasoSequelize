import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Profile = sequelize.define(
  "TagModel",
  {
    nickname: {
      type: DataTypes.STRING(20),
      unique: true,
      allowNull: false,
    },
    followers: {
      type: DataTypes.FLOAT,
    },
  },
  {
    paranoid: true,
  },
);
