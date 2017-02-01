const path = require('path')
const express = require('express')  
const exphbs = require('express-handlebars')

const app = express()

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
