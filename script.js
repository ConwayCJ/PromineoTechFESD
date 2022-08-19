

  const crudUrl = 'https://crudcrud.com/api/20042194495041068b473bad1589fc93/pokemon'
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
    let counter = 0
    $('#app').empty()
    listOfTrainers.forEach(trainer => {
      counter +=1
      $('#app').append(
        `<div id="${trainer.id} class="trainer-box">${counter}: ${trainer}</div>`
        )
    })
  }




  $('#newPartyForm').submit(event => {
    event.preventDefault();    
    //formData is the way that we're holding 'trainer name' values submitted with the form
    const formData = {trainer: $('#newTrainer').val()}
    
    console.log(formData)
    console.log(formData.trainer)
    //this post call will submit formData to our crudCrud API - then log if it was successful/errors etc
  $.ajax({
        url: crudUrl,
        data: JSON.stringify(formData.trainer),
        dataType: "json",
        type: "POST",
        contentType: "application/json",
        crossDomain: true,
      });

    // $.post(crudUrl,
    //   {trainer: formData.trainer},
    //   (data => {console.log(data)
    //   }),
    //   'json',
    //   crossDomain: true)
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

  //function to add a trainer when submit button is pushes based on the id's value









