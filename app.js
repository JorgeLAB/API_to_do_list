const express = require('express');
const app = express();
app.use(express.json());


// Podemos criar um middleware está é a estrutura.

const log = (req, res,next ) => {
	console.log(req.body);
	console.log(`Data: ${Date.now()}`);
	next(); // Caso eu remova o next ele não irá passar para os próximos middleware
}

// Agora podemos usar o middleware como fizemos com o middleware json()

app.use(log);

app.get('/', (req,res) => {
	res.send("<h1>Eviando um título</h1>");
});

app.get("/json", (req,res) =>{
	res.json({"title": "Era um vez", "lugar": "Meio do nada"})
});

app.listen(3000, () => {
	console.log("Servidor Ligado");
});

