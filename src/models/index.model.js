import { Article } from "./article.model.js";
import { ArticleTag } from "./articletag.model.js";
import { Profile } from "./profile.model.js";
import { Tag } from "./tag.model.js";
import { User } from "./user.model.js";
//Este archivo es un index el cual va a servir para ver las relaciones
//mucho mas facil sin rellenar de codigo cada archivo.model.js, como si fuera
//un routes.index.js y asi tener un poco mas ordenado     -Eri del pasado

//!Articles
Article.belongsTo(Profile, { foreignKey: "profile_id", as: "profile", })
Article.hasMany(Tag, { foreignKey: "tag_id", as: "tag" })

//!ArticleTags
ArticleTag.belongsToMany(Article, { foreignKey: "article_id", as: "article" })
ArticleTag.belongsToMany(Tag, { foreignKey: "tag_id", as: "tag" })

//!Profile
Profile.belongsTo(User, {
  foreignKey: "user_id", as: "user", onDelete: "CASCADE",
});
Profile.hasMany(Article, { foreignKey: "article_id", as: "article" })

//!TAG
Tag.belongsToMany(Article, { foreignKey: "article_id", as: "article" })

//!USER
User.hasOne(Profile, { foreignKey: "user_id", as: "profile  " });
