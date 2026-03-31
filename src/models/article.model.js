import { DataTypes } from "sequelize";
import { sequelize } from "../config/database";

export const Article = sequelize.define(
  "ArticleModel",
  {
    tittle: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    content: {
      type: DataTypes.TEXT("medium"),
    },
    status: {
      type: DataTypes.ENUM("published", "archived"),
      defaultValue: "published",
    },
  },
  {
    paranoid: true,
  },
);
