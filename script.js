const btn = document.getElementById("btn")
const gridContainer = document.getElementById("container")
const clearBtn = document.getElementById("clear-btn")
let columnsNodeList;

const createGrid = (rows, columns) => {
  gridContainer.innerHTML = ""

  for (let i = 0; i < rows; i++) {
    const rowDivEl = document.createElement("div")
    rowDivEl.classList.add("row")
    for (let i = 0; i < columns; i++) {
      const colDivEl = document.createElement("div")
      colDivEl.classList.add("column")
      rowDivEl.appendChild(colDivEl)
    }
    gridContainer.appendChild(rowDivEl)
  }

  columnsNodeList = document.querySelectorAll(".column")
  hoverEffect(columnsNodeList)
}

const hoverEffect = (nodeList) => {
  nodeList.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      el.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`
    })
  })
}

btn.addEventListener("click", () => {
  const rowInput = parseInt(prompt("Enter grid rows (1-100)"))
  const columnsInput = parseInt(prompt("Enter grid columns (1-100)"))

  createGrid(rowInput, columnsInput)
})

clearBtn.addEventListener("click", () => {
  if (columnsNodeList) {
    columnsNodeList.forEach((el) => {
      el.style.background = "blanchedalmond"
    })
  }
})