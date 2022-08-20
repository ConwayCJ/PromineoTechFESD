//You might need to grab a new crud-crud REST endpoint it's been getting used up pretty quickly.


$(document).ready(() => {
  const restEndPoint = 'd1df1bdb73a84247856f6f81ac8b0a68'
  const crudUrl = `https://crudcrud.com/api/${restEndPoint}/pokemon`
  const pokeAPI = 'https://pokeapi.co/api/v2'
  let listOfPokemon
  let listOfTrainers

  //Uses pokeapi to set listOfPokemon to an array containing all Pokemon info
  $.get(pokeAPI + '/pokemon', data => {
    listOfPokemon = data
  }).done(() => console.log(listOfPokemon))

  $.get(crudUrl, data => {
    listOfTrainers = data
  }).done(() => buildInfoList())


  const buildInfoList = () => {

    $.get(crudUrl, data => {
      listOfTrainers = data
    }).done(() => {
      $('#app').empty()
      listOfTrainers.forEach((trainer, index) => {
        console.log(listOfTrainers)
        //appends each list in our crudAPI below our form content
        $('#app').append(
          `
          <div class="container trainer-box mb-1 d-flex flex-wrap">
          <button class="btn btn-danger" id=${trainer._id}>X</button><div class="ml-3 trainerFont">Trainer: ${trainer.trainer} <br> Trainer ID: ${trainer._id}</div>
          </div>
          `
          )
          $(`#${trainer._id}`).click(() => removeItem(trainer._id))
    })
    })
  }
  //when our button to add a new Trainer is submitted, creates an object based on the value inputted - then POSTS to our API
  $('#newPartyForm').submit(event => {
    event.preventDefault();    
    $.get(crudUrl, data => {
      listOfTrainers = data
    }).done(() => buildInfoList())
    //formData is the way that we're holding 'trainer name' values submitted with the form
    const formData = {trainer: $('#newTrainer').val()}
    //this post call will submit formData to our crudCrud API - then log if it was successful/errors etc
  $.ajax({
        url: crudUrl,
        data: JSON.stringify(formData),
        dataType: "json",
        type: "POST",
        contentType: "application/json",
        crossDomain: true,
      });
  })

    const removeItem = (id) => {
      $.ajax({
        url: crudUrl + '/' + id,
        type: 'DELETE',
        success: function() {
          buildInfoList()
        }
    })
    }

    $('#updateForm').submit(event => {
      event.preventDefault();

      const formData = {
        id: $('#updateTrainer').val(),
        trainer: $('#newTrainerName').val(),
      }

      $.ajax({
        url: crudUrl + '/' + formData.id,
        type: 'PUT',
        contentType: 'application/json',
        data: JSON.stringify(formData),
        crossDomain: true,
      }).done(() => buildInfoList());

      $('#updateForm').trigger('reset');

    })
    


  //function to add a trainer when submit button is pushes based on the id's value
  
})