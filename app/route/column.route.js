module.exports = function (app) {
  const column = require("../controller/column.controller.js");

  app.post("/api/columns/:boardId", column.create);
  app.post("/api/columns/:columnId/task", column.createTask);
  app.delete("/api/columns/:columnId", column.delete);
};
