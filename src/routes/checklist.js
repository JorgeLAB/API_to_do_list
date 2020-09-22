const express = require('express');
const router = express.Router(); // uma ferramenta do express;

router.get("/", (req,res) => {
	console.log("Foi executado");
	res.send()
})

module.exports = router;
