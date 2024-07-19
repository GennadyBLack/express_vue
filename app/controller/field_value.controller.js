const db = require("../config/db.config.js");
const FieldValue = db.field_value;

// Create a new FieldValue
exports.create = (req, res) => {
  const { recordId, fieldId, value } = req.body;
  FieldValue.create({ recordId, fieldId, value })
    .then((fieldValue) => res.send(fieldValue))
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Fetch all FieldValues
exports.findAll = (req, res) => {
  FieldValue.findAll()
    .then((fieldValues) => res.send(fieldValues))
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Find a FieldValue by Id
exports.findById = (req, res) => {
  FieldValue.findOne({ where: { id: req.params.valueId } })
    .then((fieldValue) => res.send(fieldValue))
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Update a FieldValue
exports.update = (req, res) => {
  FieldValue.findOne({ where: { id: req.params.valueId } })
    .then((fieldValue) => {
      fieldValue
        .update(req.body)
        .then(() => res.send(fieldValue))
        .catch((err) => res.status(500).send("Error -> " + err));
    })
    .catch((err) => res.status(500).send("Error -> " + err));
};

// Delete a FieldValue
exports.delete = (req, res) => {
  FieldValue.destroy({ where: { id: req.params.valueId } })
    .then(() => res.send("FieldValue has been deleted!"))
    .catch((err) => res.status(500).send("Error -> " + err));
};

exports.bulkCreate = (req, res) => {
  const { recordId, fieldValues } = req.body;

  const fieldValuesData = fieldValues.map((fieldValue) => ({
    recordId: recordId,
    fieldId: fieldValue.fieldId,
    value: fieldValue.value,
  }));

  FieldValue.bulkCreate(fieldValuesData)
    .then((createdFieldValues) => res.send(createdFieldValues))
    .catch((err) => res.status(500).send("Error -> " + err));
};

exports.bulkUpdate = async (req, res) => {
  const { recordId, fieldValues } = req.body;

  try {
    const updatePromises = fieldValues.map(async (fieldValue) => {
      const existingFieldValue = await FieldValue.findOne({
        where: {
          recordId: recordId,
          fieldId: fieldValue.fieldId,
        },
      });

      if (existingFieldValue) {
        return existingFieldValue.update({ value: fieldValue.value });
      } else {
        return FieldValue.create({
          recordId: recordId,
          fieldId: fieldValue.fieldId,
          value: fieldValue.value,
        });
      }
    });

    const updatedFieldValues = await Promise.all(updatePromises);
    res.send(updatedFieldValues);
  } catch (err) {
    res.status(500).send("Error -> " + err);
  }
};
