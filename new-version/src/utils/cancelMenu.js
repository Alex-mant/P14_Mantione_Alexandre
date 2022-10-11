export const cancelMenu = () => {
  document.querySelectorAll('.context-menu').forEach((menu) => menu.remove());
  document.querySelectorAll('.ag-cell').forEach((row) => {
    row.style.backgroundColor = '#fff';
    row.style.color = '#000';
    document.querySelectorAll('.context-menu').forEach((menu) => menu.remove());
  })
}