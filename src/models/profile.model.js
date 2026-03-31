import { Types } from "mysql2";
import { sequelize } from "../config/database";
import { DataTypes } from "sequelize";

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
