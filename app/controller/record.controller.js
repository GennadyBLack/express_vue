const db = require("../config/db.config.js");

const Record = db.record;
const FieldValue = db.field_value;

// Create a new Record
exports.create = (req, res) => {
  const { tableId } = req.body;
  Record.create({ tableId })
    .then((record) => res.send(record))
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Fetch all Records
exports.findAll = (req, res) => {
  Record.findAll()
    .then((records) => res.send(records))
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Find a Record by Id
exports.findById = (req, res) => {
  Record.findOne({ where: { id: req.params.recordId } })
    .then((record) => res.send(record))
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Update a Record
exports.update = (req, res) => {
  Record.findOne({ where: { id: req.params.recordId } })
    .then((record) => {
      record
        .update(req.body)
        .then(() => res.send(record))
        .catch((err) => res.status(500).send("Error -> " + err));
    })
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Delete a Record
exports.delete = (req, res) => {
  Record.destroy({ where: { id: req.params.recordId } })
    .then(() => res.send("Record has been deleted!"))
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Retrieve all Records for a specific Table with filtering, sorting, and pagination
exports.findAllForTable = async (req, res) => {
  try {
    const { tableId } = req.params;
    const {
      sortBy = "id",
      page = 1,
      sortOrder = "asc",
      filterBy = {},
      limit = 10,
      offset = 0,
    } = req.query;

    // Validate sortBy and sortOrder
    const validSortBy = ["id", "createdAt", "updatedAt"]; // Add any other sortable fields here
    const validSortOrder = ["asc", "desc"];
    const order = validSortBy.includes(sortBy) ? sortBy : "id";
    const orderDirection = validSortOrder.includes(sortOrder)
      ? sortOrder
      : "asc";

    // Get records for the specified table
    const records = await Record.findAll({
      where: { tableId: tableId },
      order: [[order, orderDirection]],
      limit: parseInt(limit),
      offset: parseInt(page == 1 ? 0 : page - 1 * limit),
    });

    // Get all field values for the specified table
    const fieldValues = await FieldValue.findAll({
      where: { recordId: records.map((record) => record.id) },
      include: "tableColumn",
    });

    // Transform records to include field values
    const transformedRecords = records.map((record) => {
      const values = fieldValues
        .filter((fv) => fv?.recordId === record?.id)
        .reduce((acc, fv) => {
          acc[fv.tableColumn.name] = fv?.value;
          // {
          //   value: ,
          //   fieldId: fv?.tableColumn?.id,
          // };
          return acc;
        }, {});
      return {
        ...record.toJSON(),
        ...values,
      };
    });

    res.send({ data: transformedRecords, meta: { limit, page } });
  } catch (err) {
    res.status(500).send("Error -> " + err);
  }
};

exports.createBulk = async (req, res) => {
  const { tableId, ...recordData } = req.body;

  // Start a transaction
  const t = await db.sequelize.transaction();

  try {
    // Create the record
    const record = await Record.create(
      {
        tableId: tableId,
        ...recordData,
      },
      { transaction: t }
    );

    // Find columns for the table
    const columns = await TableColumn.findAll(
      {
        where: { tableId: tableId },
      },
      { transaction: t }
    );

    // Create default field values
    const fieldValues = columns.map((column) => ({
      recordId: record.id,
      fieldId: column.id,
      value: column.defaultValue || "", // Assuming defaultValue is defined in TableColumn model
    }));

    await FieldValue.bulkCreate(fieldValues, { transaction: t });

    // Commit the transaction
    await t.commit();

    res.status(201).send(record);
  } catch (err) {
    // Rollback the transaction in case of error
    await t.rollback();
    res.status(500).send("Error -> " + err);
  }
};
