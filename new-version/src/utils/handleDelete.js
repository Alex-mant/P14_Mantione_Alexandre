import { removeEmployee } from "../redux/feature/formularySlice";

export const handleDelete = (key, {dispatch, data}) => {
  dispatch(removeEmployee(data.filter((data) => data.key !== key)))
}