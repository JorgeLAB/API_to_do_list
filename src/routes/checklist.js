const express = require('express');
const router = express.Router(); // uma ferramenta do express;

router.get("/", (req,res) => {
	console.log("Foi executado");
	res.send()
})

router.post("/", (req,res) => {
	console.log(req.body);
	res.status(200).json(req.body);
})

// recebendo parametro pela URL

router.get("/:id", (req,res) => {
	console.log(req.params.id); // capturando valor da URL e imprimindo no console.
	res.send(`ID: ${req.params.id}`); // enviando valor de parâmetro para o body.
})



module.exports = router;
