const db = require("../config/db.config.js");
const Board = db.board;

// Post a Board
exports.create = (req, res) => {
  const { title, description, background } = req.body;
  // Save to PostgreSQL database
  Board.create({
    title: title,
    description: description,
    background: background,
  })
    .then((Task) => {
      // Send created Task to client
      res.send(Task);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// FETCH all tasks
exports.findAll = (req, res) => {
  console.log(req, "req");
  Board.findAll()
    .then((tasks) => {
      // Send all tasks to Client
      res.send(tasks);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// Find a Task by Id
exports.findById = (req, res) => {
  Board.findById(req.params.taskId)
    .then((Board) => {
      res.send(Board);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// Find tasks by Age
exports.findByActive = (req, res) => {
  Board.findAll({
    where: {
      active: req.params.active,
    },
  })
    .then((tasks) => {
      res.send(tasks);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// Update a Task
exports.update = (req, res) => {
  //var Task = req.body;

  const id = req.params.taskId;
  Board.update(
    { name: req.body.name, age: req.body.age, active: req.body.active },
    { where: { id: req.params.taskId } }
  )
    .then(() => {
      res.status(200).send(Task);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// Delete a Task by Id
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
