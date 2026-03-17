import { DataTypes } from "sequelize";
import { sequelize, } from "../config/database.js";

export const User = sequelize.define(
    "UserModel",
    {
        username:{
            type:DataTypes.STRING(20),
            allowNull:false,
            unique:true
        },
        email:{
            type:DataTypes.STRING(20),
            unique:true,
            allowNull:false
        },
        password:{
            type:DataTypes.STRING(20),
            allowNull:false
        }
        }
)