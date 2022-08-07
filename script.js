/*TODO LIST:
1. Make submit button add new row
2. Make submit button take in information to add new row
3. Make delete button on the right work correctly
4. 
*/
function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


let submitButton = document.getElementById('submitButton')
let tbody = document.querySelector("#main-table tbody")


function addNewRow (event) {
  event.preventDefault()
  let row = document.createElement('tr')
  
  let tdNumber = document.createElement("td")
  let noLength = tbody.children.length +1
  tdNumber.innerText = noLength
  row.appendChild(tdNumber)
  
  let tdTask = document.createElement("td")
  tdTask.classList.add('task')
  tdTask.innerText = capitalizeFirstLetter(document.querySelector('#userInput').value)
  document.querySelector('#userInput').value = null
  row.appendChild(tdTask)
  
  let tdCompleted = document.createElement("td")
  tdCompleted.appendChild(document.querySelector('label.switch').cloneNode(true))
  tdCompleted.classList.add('text-center')
  row.appendChild(tdCompleted)
 
  let tdActions = document.createElement("td")
  let newButton = document.createElement('button')
  newButton.className = "del-button"
  let iEle = document.createElement('i')
  iEle.className = 'fa fa-trash-o'
  newButton.appendChild(iEle)

  newButton.addEventListener('click', deleteRow)
  tdActions.appendChild(newButton)
  row.appendChild(tdActions)

  tbody.appendChild(row)
}




function deleteRow (event) {

  if (confirm('This row is about to be deleted.')) {
    event.currentTarget.closest('tr').remove()
  }
}


let newItemForm = document.querySelector('#new-row')

newItemForm.addEventListener('submit', addNewRow)
