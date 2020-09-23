const express = require('express');
const router = express.Router(); // uma ferramenta do express;
const Checklist = require("../models/checklist")

// Nesta rota iremos retornar todos os checklist presente no banco

router.get("/", async (req,res) => {
	try{
		let checklists = await Checklist.find({});
		res.status(200).json(checklists);
	} catch (error){
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
	let {name} = req.body;
	try{
		let checklist = await Checklist.create({name});
		res.status(200).json(checklist);
	}catch (error){
		res.status(422).json(error);
	}
})

// recebendo parametro pela URL
/*
router.get("/:id", (req,res) => {
	console.log(req.params.id); // capturando valor da URL e imprimindo no console.
	res.send(`ID: ${req.params.id}`); // enviando valor de parâmetro para o body.
})
*/

router.get("/:id", async(req,res) => {
	try{
		let checklist = await Checklist.findById(req.params.id);
		res.status(200).json(checklist);
	}catch (error){
		res.status(422).json(error);
	}
})

module.exports = router;
