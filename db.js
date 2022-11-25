const { Pool } = require('pg')

// Criando pool de conexão:
const pool = new Pool({
    connectionString: 'postgres://qmgdrjer:y2nAwHfNlVVLk3AEuQi6M3lDH36Nrs57@babar.db.elephantsql.com/qmgdrjer'
})


const selectTasks = async (_request, response) => {

    // Query de SELECT:
    pool.query('SELECT * FROM tarefas', (error, results) => {

        // Lançando erro:
        if (error) {
          throw error
        }
        // Response com as linhas do sql
        response.status(200).json(results.rows)
      })
    
}

module.exports = { selectTasks }