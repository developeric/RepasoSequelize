import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const ArticleTag = sequelize.define("ArticleTagModel", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
});
