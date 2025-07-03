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


function showAlert(message) {
  const alertBox = document.querySelector(".alert-message");
  const alertText = alertBox.querySelector("span");

  alertText.textContent = message;

  //Shows the alert message again
  alertBox.style.display = "flex";

  // Pushes the animation to start again
  alertBox.style.opacity = "0";

  //Make sure the animation works
  setTimeout(() => {
    alertBox.style.opacity = "1";
  }, 10); // Delay

  // Fades after 1.5s
  setTimeout(() => {
    alertBox.style.opacity = "0";
  }, 1500);

  //Hides 
  setTimeout(() => {
    alertBox.style.display = "none";
  }, 1800);
}


