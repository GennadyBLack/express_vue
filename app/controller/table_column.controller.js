const db = require("../config/db.config.js");
const TableColumn = db.table_column;

// Create a new TableColumn
exports.create = (req, res) => {
  const { tableId, name, type, options } = req.body;
  TableColumn.create({ tableId, name, type, options })
    .then((tableColumn) => res.send(tableColumn))
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Fetch all TableColumns
exports.findAll = (req, res) => {
  TableColumn.findAll()
    .then((tableColumns) => res.send(tableColumns))
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Find a TableColumn by Id
exports.findById = (req, res) => {
  TableColumn.findOne({ where: { id: req.params.columnId } })
    .then((tableColumn) => res.send(tableColumn))
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Update a TableColumn
exports.update = (req, res) => {
  TableColumn.findOne({ where: { id: req.params.columnId } })
    .then((tableColumn) => {
      tableColumn
        .update(req.body)
        .then(() => res.send(tableColumn))
        .catch((err) => res.status(500).send("Error -> " + err));
    })
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Delete a TableColumn
exports.delete = (req, res) => {
  TableColumn.destroy({ where: { id: req.params.columnId } })
    .then(() => res.send("TableColumn has been deleted!"))
    .catch((err) => res.status(500).send("Error -> " + err));
};
