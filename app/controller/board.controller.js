const db = require("../config/db.config.js");
const Board = db.board;

// FETCH all boards
exports.findAll = (req, res) => {
  Board.findAll()
    .then((boards) => {
      // Send all boards to Client
      res.send(boards);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// Find a Board by Id
exports.findById = (req, res) => {
  Board.findOne({
    where: { id: req.params.boardId },
    include: { all: true, nested: true },
  })
    .then((Board) => {
      res.send(Board);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// Update a Board
exports.update = (req, res) => {
  var Board = req.body;
  const id = req.params.boardId;
  Board.update(
    { name: req.body.name, age: req.body.age, active: req.body.active },
    { where: { id: req.params.boardId } }
  )
    .then(() => {
      res.status(200).send(Board);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// Delete a Board by Id
exports.delete = (req, res) => {
  const id = req.params.boardId;
  Board.destroy({
    where: { id: id },
  })
    .then(() => {
      res.status(200).send("Board has been deleted!");
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};
