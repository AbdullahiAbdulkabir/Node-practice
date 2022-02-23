const express = require('express')

const app = express();

app.listen(4000)

app.get('/',(req, res)=> {
    res.send( "<h1> Hello world in Express Js </h1>")
})