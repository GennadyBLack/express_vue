module.exports = function (app) {
  const fieldValueController = require("../controller/field_value.controller.js");
  app.post("/api/field_values", fieldValueController.create);
  app.get("/api/field_values", fieldValueController.findAll);
  app.get("/api/field_values/:valueId", fieldValueController.findById);
  app.put("/api/field_values/:valueId", fieldValueController.update);
  app.delete("/api/field_values/:valueId", fieldValueController.delete);
  app.post("/field_values/bulk", fieldValueController.bulkCreate);
  app.put("/field_values/bulk", fieldValueController.bulkUpdate);
};
