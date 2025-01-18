const container = document.querySelector(".container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.maxWidth = "500px";
container.style.maxHeight = "500px";
container.style.border= "1px solid black";

function gridSize() {
  var num = prompt("Please choose a number between 2 and 100.");
  if (num > 0 && num < 100){
    while(container.firstChild){
      container.removeChild(container.firstChild);
    }
  etchaSketch(num);
  } else {
    alert("Between 2 and 100, please.");
    return;
  }
}

const gridBtn = document.getElementById("gridSize");
gridBtn.addEventListener("click", () => gridSize());

function etchaSketch(num) {
  const sqSize = container.clientWidth / num;
  for (let i = 0; i < num * num; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.style.border = "1px solid black";
      square.style.boxSizing = "border-box";
      square.style.width = `${sqSize}px`;
      square.style.height = `${sqSize}px`;
      container.appendChild(square);
      square.addEventListener("mouseover", () => {
        square.style.backgroundColor = "black";
      });
  const resetBtn = document.querySelector("#resetBtn");
  resetBtn.addEventListener("click", () => {
    for (let i = 0; i < num * num; i++){
      square.style.backgroundColor = "white";
    }
    });
  }
}

etchaSketch(16);

