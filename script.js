//Selecting the elements 
const form = document.querySelector("form")
const input = document.querySelector("input[type='text']")
const list = document.querySelector(".list-wrapper")

//To add the item 
form.addEventListener("submit", (event) => {
  event.preventDefault() //Avoid the reload of the page
  const value = input.value.trim() //Access the value of the input & removes the spaces 
  if (value === "") return alert("Digite um item válido") //Checks if there's any empty spaces

  const li = document.createElement("li") //Creates the <li>

  //Creates the checkbox
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"

  //Creates the <p> with the item name
  const text = document.createElement("p")
  text.textContent = value

  //Creates the bin symbol
  const bin = document.createElement("img")
  bin.src = "./assets/bin.svg"
  bin.alt = "Bin-symbol"
  bin.classList.add("delete-item")
  bin.style.cursor = "pointer";

  //Adds everything to li
  li.appendChild(checkbox)
  li.appendChild(text)
  li.appendChild(bin)

  //Adds li on the list
  list.appendChild(li)

  //Cleans the input 
  input.value = ""

  //Event to remove the item as clicked in the bin
  bin.addEventListener("click", () => {
    li.remove()
    showAlert("O item foi removido da lista")
  })
})

//Function to show the removed item alert
function showAlert(message) {
  const alertBox = document.querySelector(".alert-message")
  const alertText = alertBox.querySelector("span")

  alertText.textContent = message
  alertBox.style.display = "flex"
  setTimeout(() => alertBox.style.opacity = "0", 1500); // Ease fade

}