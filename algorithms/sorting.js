function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }

  return arr;
}

function getBubbleSort() {
  let userArr = document.getElementsByTagName("input")[0].value.split(" ");
  userArr = userArr.map((num) => Number(num));

  let paragraph = document.createElement("p");
  paragraph.textContent = bubbleSort(userArr);
  document.body.append(paragraph);
}
