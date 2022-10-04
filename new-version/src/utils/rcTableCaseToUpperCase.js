export const rcTableCaseToUpperCase = () => {
  const cells = [...document.querySelectorAll('.rc-table-cell')].slice(0,9)
  cells.forEach((cell) => cell.innerText = cell.innerText.toUpperCase());
}
