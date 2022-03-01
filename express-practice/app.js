const express = require('express')

const app = express();

app.set('view engine', 'ejs')
app.listen(4000)


app.get('/',(req, res)=> {
    res.render('index',{title: "Home Page in ejs"})
    // res.sendFile('./views/index.html',{root: __dirname})
    // res.sendFile('./views/index.html',{root: __dirname})
    // res.send( "<h1> Hello world in Express Js </h1>")
})


app.get('/about',(req, res)=> {
    res.sendFile('./views/index.html',{root: __dirname})
    // res.send( "<h1> Hello world in Express Js </h1>")
})

app.use((req, res)=>{
    res.sendFile('./views/404.html',{root: __dirname})

})