const express = require('express');

const checklistDependentRoute = express.Router(); 

const Checklist = require("../models/checklist");
const Task = require("../models/task");


checklistDependentRoute.get('/:id/task/new', async (req,res) => {
	try{
		let task = Task();
		res.status(200).render('tasks/new', {checklistId: req.params.id, task: task})
	}catch (error){
		res.status(422).render('pages/error', {errors: "Error ao exibir de tarefa"});
	}
})

checklistDependentRoute.post('/:id/tasks', async (req,res) => { // este id pertence ao checklist
		let {name} = req.body.task;
		let task = new Task({name, checklist: req.params.id});
	try{
		await task.save()
		let checklist = await Checklist.findById(req.params.id);
		checklist.tasks.push(task);
		await checklist.save();
		res.redirect(`/checklists/${req.params.id}`);
	}catch (error){
		res.status(422).render('tasks/new', {task: {...task, error}, checklistId: req.params.id });
	}
})

module.exports = {checklistDependent: checklistDependentRoute }; // estamos passando um middleware específico podemos fazer a criação de mais.
