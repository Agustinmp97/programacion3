const express = require("express")

const app = express()

app.listen('4000', ()=>{
    console.log('Conexion en el puerto 4000')
})

app.get('/api-version', (req, res)=>{
    res.send({
        author: "Agustin Pich",
        version: "1.0",
        tech: "Framework Express"
    })
})


