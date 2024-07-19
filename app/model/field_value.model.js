module.exports = (sequelize, Sequelize) => {
  const FieldValue = sequelize.define("fieldValue", {
    recordId: {
      type: Sequelize.INTEGER,
      references: {
        model: "records",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    fieldId: {
      type: Sequelize.INTEGER,
      references: {
        model: "tableColumns",
        key: "id",
      },
      onDelete: "CASCADE",
    },
    value: {
      type: Sequelize.STRING, // Используйте STRING для простоты, можно изменить тип в зависимости от поля
      allowNull: false,
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

  return FieldValue;
};
