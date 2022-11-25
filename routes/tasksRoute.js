const db = require('../db')

const tasksRoute = (app) => {

  // GET:
  app.get('/tasks', db.selectTasks)
}

module.exports = tasksRoute