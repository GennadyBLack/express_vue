module.exports = (sequelize, Sequelize) => {
  const Record = sequelize.define("record", {
    tableId: {
      type: Sequelize.INTEGER,
      references: {
        model: "tables",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    createdAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
    updatedAt: {
      type: Sequelize.DATE,
      defaultValue: Sequelize.NOW,
    },
  });

  return Record;
};
