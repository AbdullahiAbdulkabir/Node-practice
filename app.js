const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const Routes = require('./routes/index')

const app = express()
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }));
app.use(Routes)

mongoose.connect(process.env.DATABASE_URL).then(result =>{
    app.listen(process.env.PORT)
})








