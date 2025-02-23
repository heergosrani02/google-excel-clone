//add cells to head row
// 27(no of columns) times

let columns = 27;
let rows = 100;

let headRow = document.querySelector(".head-row");
let serialNumCol = document.querySelector(".serial-num");
let body = document.querySelector(".main-body");
let selectedCell = document.querySelector(".selected-cell");

for (let i = 1; i < columns; i++) {
  let headCell = document.createElement("div");
  headCell.textContent = String.fromCharCode(i + 64);
  headCell.classList.add("col-head");
  headRow.appendChild(headCell);
}

for (let i = 0; i < rows; i++) {
  let serialNumCell = document.createElement("div");
  serialNumCell.textContent = i + 1;
  serialNumCell.classList.add("serial-num-col");
  serialNumCol.appendChild(serialNumCell);
}

for(let i = 1; i <= rows; i++){
    let rowCell = document.createElement("div");
        rowCell.classList.add("row-cell");

    for(let j = 1; j < columns; j++){
        let colCell = document.createElement("span");
        colCell.id = `${String.fromCharCode(j + 64)}${i}`;
        colCell.contentEditable = "true";
        colCell.classList.add("col-cell");
        rowCell.appendChild(colCell);
    }

    body.appendChild(rowCell);
}

body.addEventListener("click", (e) => {
  selectedCell.textContent = e.target.id;
})