//add cells to head row
// 27(no of columns) times

let columns = 27;
let rows = 100;

let headRow = document.querySelector(".head-row");

for(let i = 0; i < columns; i++){
    let headCell = document.createElement("div");
    if(i == 0){
        headRow.appendChild(headCell);
        continue;
    }
    headCell.textContent = String.fromCharCode(i + 64);
    headCell.classList.add("col-head");
    headRow.appendChild(headCell);
}