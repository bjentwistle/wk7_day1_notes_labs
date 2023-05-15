let counter=0 //adding a counter to the number of times a butten is clicked

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded'); //page is loaded

  const button = document.querySelector("#button") //hook onto the first button
  button.addEventListener("click", handleButtonClick) //click is what we want to listen for and the function to be called when it is clicked

  const textInput = document.querySelector("#input")
  textInput.addEventListener("input", handleInput)

  const selectOptions = document.querySelector("#select")
  selectOptions.addEventListener("change", handleSelectChange) //checking for a change in the selection box

  const formInput = document.querySelector("#form")
  formInput.addEventListener("submit", handleFormSubmit)

});

const handleButtonClick = function() {
  console.log("Yeay", counter)  //this will be called when the button is click but not until.
  counter++
  const buttonResult = document.querySelector("#button-result")
  buttonResult.textContent = `Button has been clicked ${counter} times` //remember to use back ticks when referenceing a variable
};

const handleInput = function(event) {
  console.log("Input happening", event.target.value)
  const inputResult = document.querySelector("#input-result")
  inputResult.textContent = `${event.target.value} - was typed here`
};

const handleSelectChange = function(event) {
  console.log("There was a change!")
  const inputResult = document.querySelector("#select-result")
  inputResult.textContent = `You selected - ${event.target.value}`
};

const handleFormSubmit = function(event) {
  event.preventDefault() //stops the page from refreshing as it would usually when a submit button is clicked - ie a POST request would be sent to server.
  console.log("Form was submitted") 
  const form = event.target // just to shorthand the event.target that is reused a lot
  const firstName = form.first_name.value
  const lastName = form.last_name.value
  console.log(firstName, lastName)
  const resultParagraph = document.querySelector("#form-result")
  resultParagraph.textContent = `You submitted ${firstName} ${lastName}`
  form.reset()
};