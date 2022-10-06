import { removeEmployee } from "../redux/feature/formularySlice";

export const handleDelete = (e, key, {dispatch, data, mocked}) => {
  if(!mocked){
    dispatch(removeEmployee(data.filter((data) => data.key !== key)))
  }else{
    e.target.parentElement.parentElement.style.display = "none";
  }
}