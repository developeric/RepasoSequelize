import { Sequelize } from "sequelize";

export const sequelize = new Sequelize(repasosequelize, root, {
  host: localhost,
  dialect: mysql,
});

export const startDB = async () => {
  try {
    (await sequelize.authenticate(),
      console.log("se ha establecido conexion"),
      await sequelize.sync());
  } catch (error) {
    error;
  }
};
