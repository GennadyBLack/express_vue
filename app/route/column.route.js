module.exports = function (app) {
  const column = require("../controller/column.controller.js");

  // Retrieve all Boards
  // app.get("/api/boards", boards.findAll);

  //crete
  app.post("/api/columns/:boardId", column.create);

  // // Retrieve a single Board by Id
  // app.get("/api/boards/:boardId", boards.findById);

  // // Update a Customer with Id
  // app.put("/api/boards/:boardsId", boards.update);

  // // Delete a Customer with Id
  // app.delete("/api/boards/:boardsId", boards.delete);
};