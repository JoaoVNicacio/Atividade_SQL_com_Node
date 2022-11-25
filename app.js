const express = require('express')
const app = express()

const tasksRoute = require('./routes/tasksRoute')

const port = 3000
const address = 'http://localhost:'

app.use(express.static('front-end'))

// Usando json e url-encoded para as requisições:
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Usando a rota das tarefas:
tasksRoute(app)

const server = app.listen(port, () => {
  console.log(`Server is running in: ${address}${port}`)
})
