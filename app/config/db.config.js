// Setup Sequelize-PostgreSQL
const env = require("./env.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.task = require("../model/task.model.js")(sequelize, Sequelize);
db.user = require("../model/user.model.js")(sequelize, Sequelize);
db.board = require("../model/board.model.js")(sequelize, Sequelize);
db.column = require("../model/column.model.js")(sequelize, Sequelize);

db.table = require("../model/table.model.js")(sequelize, Sequelize);
db.table_column = require("../model/table_column.model.js")(
  sequelize,
  Sequelize
);
db.record = require("../model/record.model.js")(sequelize, Sequelize);
db.field_value = require("../model/field_value.model.js")(sequelize, Sequelize);

// RELATIONSHIPS
db.user.hasMany(db.board);
db.board.belongsTo(db.user);

db.board.hasMany(db.column);
db.column.belongsTo(db.board);

db.column.hasMany(db.task);
db.task.belongsTo(db.column);

db.user.hasMany(db.table);
db.table.belongsTo(db.user);

db.table.hasMany(db.table_column);
db.table_column.belongsTo(db.table);

db.table.hasMany(db.record);
db.record.belongsTo(db.table);

db.record.hasMany(db.field_value);
db.field_value.belongsTo(db.record);

db.table_column.hasMany(db.field_value, { foreignKey: "fieldId" });
db.field_value.belongsTo(db.table_column, { foreignKey: "fieldId" });

module.exports = db;
