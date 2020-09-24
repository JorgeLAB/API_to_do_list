const express = require('express');
const router = express.Router(); // uma ferramenta do express;
const Checklist = require("../models/checklist")

// Nesta rota iremos retornar todos os checklist presente no banco

router.get("/", async (req,res) => {
	try{
		let checklists = await Checklist.find({});
		res.render('checklists/index', {checklists: checklists}); // ainda estou passando uma variável para a view;
	} catch (error){
		res.status(422).json(error);
	}
})

router.get("/new", async (req,res) => {
	try{
		let checklist = new Checklist();
		res.status(200).render('checklists/new', {checklist: checklist});
	}catch (error){
		res.status(500)
	}
})

router.get("/:id", async (req,res) => {
	try{
		let checklist = await Checklist.findById(req.params.id);
		console.log(checklist.tasks)
		res.render('checklists/show', {checklist: checklist}); // aqui também estou passando variável para ser empregada na view
	}catch (error){
		res.status(422).json(error);
	}
})

router.put('/:id', async (req,res) => {
	let {name} = req.body;
	try{
		let checklist = await Checklist.findByIdAndUpdate(req.params.id, {name}); // passando-se o parâmetro new com valor true podemos estar passando a atualização no resultado não o 
		res.status(200).json(checklist);
	}catch (error){
		res.status(422).json(error);
	}
})

router.delete('/:id', async (req,res) => {
	try{
		let checklist = await Checklist.findByIdAndRemove(req.params.id); 
		res.status(200).json({"checklist": `${req.params.id} - Deleltada`}); 
	}catch (error){
		res.status(422).json(error);
	}
})

router.post("/", async (req,res) => {
	let {name} = req.body.checklist; // agora não irar ser passado pelo bosy mais sim por um objeto checklist
	let checklist = new Checklist({name});

	try{
		await checklist.save();
		//res.status(200).json(checklist);
		res.redirect('/checklists'); // redirecionamento
	}catch (error){
		res.status(500).render('checklists/new', {checklist: {...checklist, error}});
	}
})

// recebendo parametro pela URL
/*
router.get("/:id", (req,res) => {
	console.log(req.params.id); // capturando valor da URL e imprimindo no console.
	res.send(`ID: ${req.params.id}`); // enviando valor de parâmetro para o body.
})
*/


module.exports = router;
