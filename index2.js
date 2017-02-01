const path = require('path')
const express = require('express')  
const exphbs = require('express-handlebars')

const app = express()

//app.use((request, response, next) => {  
//  console.log(request.headers)
//  next()
//})

//app.use((request, response, next) => {  
//  request.chance = Math.random()
//  next()
//})

//app.get('/', (request, response) => {  
//  response.json({
//    chance: request.chance
//  })
//})

//app.get('/', (request, response) => {  
//  throw new Error('oops')
//})

//app.use((err, request, response, next) => {  
//  log the error, for now just console.log
//  console.log(err)
//  response.status(500).send('Something broke!')
//})

app.engine('.hbs', exphbs({  
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')  
app.set('views', path.join(__dirname, 'views'))  

app.get('/', (request, response) => {  
  response.render('home', {
    name: 'John'
  })
})

const users = []

app.post('/users', function (req, res) {  
    // retrieve user posted data from the body
    const user = req.body
    users.push({
      name: user.name,
      age: user.age
    })
    res.send('successfully registered')
})

app.listen(3000)  