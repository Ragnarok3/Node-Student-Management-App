const express = require('express')
const path = require('path')
const handlebars = require('handlebars')
const hbs = require('hbs')

const port = process.env.PORT || 3000



const app = express()

//Define paths for express config
const publicDirPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath = path.join(__dirname,'../templates/partials')

//setup handebars engine and views location
app.set('view engine', 'hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)




//setup static directory to use
app.use(express.static(publicDirPath))




//these are get routes

app.get('',(req,res) => {
  res.render('index')
})

app.get('*',(req,res) => {
  res.render('404')
})

app.listen(port, () => {
  console.log('server is up on port 3000')
})
