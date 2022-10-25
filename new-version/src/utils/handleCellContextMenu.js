import { cancelMenu } from "./cancelMenu";
import { handleDelete } from "./handleDelete";
import trash from '../assets/trash.svg'

/**
 * It creates a context menu, adds an event listener to it, and adds an event listener to each row in
 * the table.
 * @param e - the event object
 * @param dispatch - the dispatch function from redux
 * @param data - is the data that is being passed to the grid
 */
export  const handleCellContextMenu = (e, dispatch, data) => {
  cancelMenu();
  const rows = e.event.path[1].querySelectorAll('.ag-cell');  
  const menu = document.createElement('div');
  menu.classList.add('context-menu');
  menu.innerHTML = `<img src=${trash} alt="trash-icon"><span>Confirm to delete ?</span> `
  menu.addEventListener('click', () => {handleDelete(e.data.key, {dispatch, data})})
  menu.addEventListener('click', () => {cancelMenu()})
  rows.forEach((row) =>{
    row.addEventListener('contextmenu', cancelMenu)
    row.style.backgroundColor = '#768e12';
    row.style.color = '#fff';
    row.parentElement.appendChild(menu)
  })
}