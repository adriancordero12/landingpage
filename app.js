const express = require("express");
const app = express()
const port = 3000;

console.log(port)
app.use(express.static('public')); 

app.listen(port, () =>{
    console.log(`El servidor esta escuchando el puerto ${port}`)
})
