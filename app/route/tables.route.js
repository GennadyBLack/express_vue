module.exports = function (app) {
  const table = require("../controller/table.controller.js");
  app.post("/api/tables", table.create);
  app.get("/api/tables", table.findAll);
  app.get("/api/tables/:tableId", table.findById);
  app.put("/api/tables/:tableId", table.update);
  app.delete("/api/tables/:tableId", table.delete);
  app.post("/api/tables/:tableId", table.createTableData);
};
