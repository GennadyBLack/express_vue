module.exports = (sequelize, Sequelize) => {
  const Column = sequelize.define("columns", {
    title: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: true },
    },
    background: {
      type: Sequelize.STRING,
      allowNull: true,
      // set(value) {
      //     // Перед записью в БД пароли следует "хэшировать" с помощью криптографической функции
      //     this.setDataValue('password', hash(value))
      //   },
    },
  });

  return Column;
};
