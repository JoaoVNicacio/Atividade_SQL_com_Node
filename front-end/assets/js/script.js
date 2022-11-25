const tasksContainer = document.getElementById('tasksContainer')

// Obtendo a requisição GET com Axios:
async function getTasks() {

  axios.get('/tasks')

    .then(function (response) {

      //response.json();
      console.log(response.data);

      tasksContainer.innerHTML = ""
      for (let i = 0; i <= response.data.length; i++) {
        tasksContainer.innerHTML += `<li>${response.data[i].id} - ${response.data[i].descricao} - Feita: ${response.data[i].feita}  </li>`
      }
    })

    .catch(function(error) {
      console.log(error)

    })

    .then(function() {

    });

}

getTasks()