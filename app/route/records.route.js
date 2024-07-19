module.exports = function (app) {
  const records = require("../controller/record.controller.js");

  app.post("/api/records", records.create);
  app.get("/api/records", records.findAll);
  app.get("/api/records/:recordId", records.findById);
  app.put("/api/records/:recordId", records.update);
  app.delete("/api/records/:recordId", records.delete);
  app.get("/api/tables/:tableId/records", records.findAllForTable);
};
