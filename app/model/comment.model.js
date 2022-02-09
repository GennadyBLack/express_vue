module.exports = (sequelize, Sequelize) => {
  const Comment = sequelize.define("comments", {
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
    },
  });

  return Comment;
};
