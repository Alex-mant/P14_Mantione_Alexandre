import { cancelMenu } from "./cancelMenu";
import { handleDelete } from "./handleDelete";

export  const handleCellContextMenu = (e, {dispatch, data}) => {
  cancelMenu();
  e.event.path[1].querySelectorAll('.ag-cell').forEach((row) => {
    row.style.backgroundColor = '#768e12';
    row.style.color = '#fff';
    const menu = document.createElement('div');
    menu.classList.add('context-menu');
    menu.innerHTML = 'Confirm to delete ?'
    menu.addEventListener('click', () => {handleDelete(e.data.key, {dispatch, data})})
    menu.addEventListener('contextmenu', () => {cancelMenu()})
    row.parentElement.appendChild(menu)
  })
}