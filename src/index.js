const express = require('express');
const app = express()
const port = process.env.PORT || 3000;

//Rota para o sub dominio esp [Sub dominio principal]

//Paginas
const pagerouter = require('./page/pagerouter.js')
app.use(pagerouter);
//Dados 
const datarouter = require('./page/datarouter.js')
app.use(datarouter);



app.listen(port, () => {
  console.log(`Site rodando na porta port ${port}`)
})