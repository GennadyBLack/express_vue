const db = require("../config/db.config.js");
const Table = db.table;
const Record = db.record;
const FieldValue = db.field_value;

// Create a new Table
exports.create = (req, res) => {
  const { name, description, userId } = req.body;
  Table.create({ name, description, userId })
    .then((table) => res.send(table))
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Fetch all Tables
exports.findAll = (req, res) => {
  Table.findAll()
    .then((tables) => res.send(tables))
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Find a Table by Id
exports.findById = (req, res) => {
  Table.findOne({
    where: { id: req.params.tableId },
    include: "tableColumns",
  })
    .then((table) => res.send(table))
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Update a Table
exports.update = (req, res) => {
  Table.findOne({ where: { id: req.params.tableId } })
    .then((table) => {
      table
        .update(req.body)
        .then(() => res.send(table))
        .catch((err) => res.status(500).send("Error -> " + err));
    })
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Delete a Table
exports.delete = (req, res) => {
  Table.destroy({ where: { id: req.params.tableId } })
    .then(() => res.send("Table has been deleted!"))
    .catch((err) => res.status(500).send("Error -> " + err));
};

exports.createTableData = async (req, res) => {
  try {
    console.error(
      req?.body?.fields,
      "req?.body?.data?.fieldsreq?.body?.data?.fieldsreq?.body?.data?.fieldsreq?.body?.data?.fields"
    );
    if (!req?.body?.fields) {
      return res.status(500).send("Error -> fields not found");
    }
    const record = await Record.create({
      tableId: req.params.tableId,
    });

    const columns = Object.entries(req?.body?.fields).map(([key, value]) => ({
      recordId: record.id,
      fieldId: key,
      value: value,
    }));

    console.error(columns, "COOOOLUUMNNS");

    await FieldValue.bulkCreate(columns)
      .then((fields) => res.send(fields))
      .catch((err) => res.status(500).send("Error -> " + err));
  } catch (error) {
    res.status(500).send("Error -> " + error);
  }
};
