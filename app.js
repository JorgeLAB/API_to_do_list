const express = require('express');
const app = express();
const path = require('path');
const ChecklistRouter = require("./src/routes/checklist.js"); // Aqui nós importamos o checklist,
const rootRouter = require("./src/routes/index.js");
const methodOverride = require("method-override")


app.set('view engine', 'ejs');
require('./src/config/database.js');


app.use(express.json());
app.set('views', path.join(__dirname, 'src/views'));

app.use(express.static(path.join(__dirname, 'public')));  // Habilitando o use de arquivos estáticos
app.use(express.urlencoded({extended:true}));


app.use(methodOverride('_method', {methods: ['POST','GET']}));
/*
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

*/

app.use("/checklists",ChecklistRouter);
app.use('/', rootRouter);

app.listen(3000, () => {
	console.log("Servidor Ligado");
});

