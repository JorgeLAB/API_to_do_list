const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/to_do_list', { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("Conectado ao MongoDB")).catch((error) => console.log(error));

