const db = require('../config/db.config.js');
const Task = db.tasks;
 
// Post a Task
exports.create = (req, res) => {
	console.log(req.body)	
	const {title,description,active} = req.body
	// Save to PostgreSQL database
	Task.create({  
		title: title,
		description: description,
		active:active
	}).then(Task => {		
		// Send created Task to client
		res.send(Task);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// FETCH all tasks
exports.findAll = (req, res) => {
	Task.findAll().then(tasks => {
		// Send all tasks to Client
		res.send(tasks);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// Find a Task by Id
exports.findById = (req, res) => {	
	Task.findById(req.params.taskId).then(Task => {
		res.send(Task);
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};

// Find tasks by Age
exports.findByActive = (req, res) => {
	Task.findAll({
		where: {
			active: req.params.active
		}
	}).then(
		tasks => {
			res.send(tasks)
		}
	).catch(err => {
		res.status(500).send("Error -> " + err);
	})
};
 
// Update a Task
exports.update = (req, res) => {
	var Task = req.body;
	const id = req.params.taskId;
	Task.update( { name: req.body.name, age: req.body.age, active: req.body.active }, 
						{ where: {id: req.params.taskId} }
				   ).then(() => {
						res.status(200).send(Task);
				   }).catch(err => {
						res.status(500).send("Error -> " + err);
				   })
};
 
// Delete a Task by Id
exports.delete = (req, res) => {
	const id = req.params.taskId;
	Task.destroy({
	  where: { id: id }
	}).then(() => {
		res.status(200).send('Task has been deleted!');
	}).catch(err => {
		res.status(500).send("Error -> " + err);
	});
};