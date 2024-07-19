module.exports = (sequelize, Sequelize) => {
  const TableColumn = sequelize.define("tableColumn", {
    tableId: {
      type: Sequelize.INTEGER,
      references: {
        model: "tables",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    type: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    options: {
      type: Sequelize.JSON,
      allowNull: true,
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

  return TableColumn;
};
