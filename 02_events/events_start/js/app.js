let counter=0
document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript has loaded'); //page is loaded

  
  const button = document.querySelector("#button") //hook onto the first button
  button.addEventListener("click", handleButtonClick) //click is what we want to listen for and the function to be called when it is clicked


});

const handleButtonClick = function() {
  console.log("Yeay", counter)  //this will be called when the button is click but not until.
  counter++
  const buttonResult = document.querySelector("#button-result")
  buttonResult.textContent = `Button has been clicked ${counter} times`
};


