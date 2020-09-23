const mongoose = require('mongoose');

const checklistSchema = mongoose.Schema({
	name: {type: String, required: true},
	// dentro de task teremos um array já poderar múltiplas tasks para um checklist
	tasks: [{
			type: mongoose.Schema.Types.ObjectId,
			ref: "Task"
	}]
}) 

module.exports = mongoose.model('Checklist', checklistSchema);