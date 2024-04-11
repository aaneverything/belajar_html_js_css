const arr1 = [
  "apple",
  "banana",
  "car",
  "dog",
  "elephant",
  "flower",
  "guitar",
  "house",
  "ice cream",
  "jacket",
  "kite",
  "lion",
  "moon",
  "notebook",
  "orange",
  "piano",
  "queen",
  "rabbit",
  "sun",
  "table",
  "umbrella",
  "vase",
  "water",
  "xylophone",
  "yacht",
  "zebra",
  "ant",
  "book",
  "cat",
  "desk",
];
// randomize array
function randomizeArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

document.body.onload = addElement;

const rand = () => {
  randomizeArray(arr1);
  return arr1[0];
};

function addElement() {
  const noteList = document.getElementById("transList");
  noteList.innerHTML = "";

  const para = document.createElement("p");
  const  = document.createElement("p");
  noteList.appendChild(para);
  para.textContent = rand();
}
