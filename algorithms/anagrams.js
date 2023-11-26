let userInput = document.getElementsByTagName("input")[0];
let ul = document.getElementsByTagName("ul")[0];

function buttonClicked() {
  if (ul.childNodes.length >= 2) {
    return;
  }

  let list = document.createElement("li");
  list.id = "listId";
  list.textContent = userInput.value;
  ul.appendChild(list);

  userInput.value = "";
}

function anagramChecker(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split("").sort().join("");
  const sortedStr2 = str2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

function checkAnagrams() {
  let firstStr = document.getElementsByTagName("li")[0].textContent;
  let secondStr = document.getElementsByTagName("li")[1].textContent;
  let checked = anagramChecker(firstStr, secondStr);

  let paragraph = document.createElement("p");

  paragraph.textContent = checked;
  document.body.appendChild(paragraph);
}

