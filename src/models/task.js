const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
	name: {type: String, required: true},
	done: {type: Boolean, default: false}, // estato se está feito ou não
	checklist: {
		type: mongoose.Schema.Types.ObjectId ,
		ref: 'Checklist',
		required: true 		
	}
}) 
module.exports = mongoose.model('Task', taskSchema);