let columns = 27;
let rows = 100;

let headRow = document.querySelector(".head-row");
let serialNumCol = document.querySelector(".serial-num");
let body = document.querySelector(".main-body");
let activeCell = document.querySelector(".selected-cell");
let form = document.querySelector(".filter-opt");

let selectedCell = "";
let allCellData = {};

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

for (let i = 1; i <= rows; i++) {
  let rowCell = document.createElement("div");
  rowCell.classList.add("row-cell");

  for (let j = 1; j < columns; j++) {
    let colCell = document.createElement("span");
    colCell.id = `${String.fromCharCode(j + 64)}${i}`;
    colCell.contentEditable = "true";
    colCell.classList.add("col-cell");
    rowCell.appendChild(colCell);
  }

  body.appendChild(rowCell);
}

body.addEventListener("click", (e) => {

  if(selectedCell){
    selectedCell.style.border = "1px solid #82828263";
  }

  selectedCell = e.target;
  selectedCell.style.border = "1px solid rgb(22, 69, 255)";
  activeCell.textContent = e.target.id;
  applyCellInfoToForm();
});

form.addEventListener("change", () => {
  if (!selectedCell) {
    alert("Please Select a cell before applying styles!!");
    form.reset();
    return;
  }

  const formData = {
    fontFamily: form["fontFamily"].value,
    fontSize: form["fontSize"].value,
    fontWeight: form["fontWeight"].checked,
    fontStyle: form["fontStyle"].checked,
    fontUnderline: form["fontUnderline"].checked,
    align: form["align"].value,
    textColor: form["textColor"].value,
    backgroundColor: form["backgroundColor"].value,
  }

  allCellData[selectedCell.id] = {...formData, innerText: selectedCell.innerText}

  applyStyleToSelectedCell(formData);
});

function applyStyleToSelectedCell(formData) {
  selectedCell.style.fontSize = formData.fontSize;
  selectedCell.style.fontFamily = formData.fontFamily;
  selectedCell.style.fontWeight = formData.fontWeight ? "bold" : "normal";
  selectedCell.style.fontStyle = formData.fontStyle ? "italic" : "normal";
  selectedCell.style.textDecoration = formData.fontUnderline? "underline" : "none";
  selectedCell.style.textAlign = formData.align;
  selectedCell.style.color = formData.textColor;
  selectedCell.style.backgroundColor = formData.backgroundColor;
}

function applyCellInfoToForm(){

  if(!allCellData[selectedCell.id]){
    form.reset();
    return;
  }

  let specificCellData = allCellData[selectedCell.id];

  for(let key in specificCellData){
    if(key === "fontWeight" || key === "fontStyle" || key === "fontUnderline"){
      form[key].checked = specificCellData[key];
    }
    else{
      form[key].value = specificCellData[key];
    }
  }
}