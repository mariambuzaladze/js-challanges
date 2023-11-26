let userInput = document.getElementsByTagName("input")[0];
let ul = document.getElementsByTagName("ul")[0];

function add() {
  let list = document.createElement("li");
  list.id = "listId";
  list.textContent = userInput.value;

  let xButton = document.createElement("button");
  xButton.addEventListener("click", deleteText);
  xButton.textContent = "x";
  list.append(xButton);

  ul.append(list);

  userInput.value = "";
}

function deleteText(event) {
  event.target.parentNode.remove();
}