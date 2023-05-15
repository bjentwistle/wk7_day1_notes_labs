console.log('Hello World')

document.addEventListener("DOMContentLoaded",() => {
    setTimeout(updateDOM, 3000) //delay update by 3000ms
})

const updateDOM = () => {
    const title = document.querySelector('h1') //selects the h1 in css
    console.log("title", title)
    title.textContent= "JS says Hello Becky!"

    const welcome = document.querySelector("#welcome-paragraph")
    //selecting the id of welcome-paragraph - use #
    console.dir("id welcome-paragraph", welcome)
    welcome.textContent = "What are you doing here? Get out!"

    const allLis = document.querySelectorAll("li")
    console.log(allLis)

    const redListItem = document.querySelector("li.red")
    console.log(redListItem)
    redListItem.textContent = "RED!"
    redListItem.classList.add("bold") //adds bold to the red css class itme

    //make a new li item
    const newListItem = document.createElement("li")
    newListItem.textContent = "Purple"
    newListItem.classList.add("purple")
    console.log(newListItem)
    //append it to its parent
    const list = document.querySelector("ul")
    list.appendChild(newListItem)


} //waits until the page is loaded then do the next steps inside the curly bois {}

