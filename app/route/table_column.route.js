module.exports = function (app) {
  const table_column = require("../controller/table_column.controller.js");

  app.post("/api/table_columns", table_column.create);
  app.get("/api/table_columns", table_column.findAll);
  app.get("/api/table_columns/:columnId", table_column.findById);
  app.put("/api/table_columns/:columnId", table_column.update);
  app.delete("/api/table_columns/:columnId", table_column.delete);
};
