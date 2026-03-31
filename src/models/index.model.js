import { Article } from "./article.model.js";
import { ArticleTag } from "./articletag.model.js";
import { Profile } from "./profile.model.js";
import { Tag } from "./tag.model.js";
import { User } from "./user.model.js";
//Este archivo es un index el cual va a servir para ver las relaciones
//mucho mas facil sin rellenar de codigo cada archivo.model.js, como si fuera
//un routes.index.js y asi tener un poco mas ordenado     -Eri del pasado
/**
 **INSTALAR EL BETTER COMMENTS
 */
//Article

//ArticleTag

//Profile

Profile.belongsTo(User, {
  foreignKey: "user_id",
  as: "user",
  onDelete: "CASCADE",
});

//Tag

//User
User.hasOne(Profile, { foreignKey: "user_id" });
