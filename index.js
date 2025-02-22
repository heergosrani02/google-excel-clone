//add cells to head row
// 27(no of columns) times

let columns = 27;
let rows = 100;

let headRow = document.querySelector(".head-row");
let serialNumCol = document.querySelector(".serial-num");
let body = document.querySelector(".body");

for (let i = 0; i < columns; i++) {
  let headCell = document.createElement("div");
  headCell.textContent = String.fromCharCode(i + 65);
  headCell.classList.add("col-head");
  headRow.appendChild(headCell);
}

for (let i = 0; i < rows; i++) {
  let serialNumCell = document.createElement("div");
  serialNumCell.textContent = i + 1;
  serialNumCell.classList.add("serial-num-col");
  serialNumCol.appendChild(serialNumCell);
}

