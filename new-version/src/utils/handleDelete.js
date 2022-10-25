import { removeEmployee } from "../redux/feature/formularySlice";

/**
 * It takes a key and an object with a dispatch and data property, and then dispatches a removeEmployee
 * action with the data property filtered by the key.
 * @param key - The key of the item to be deleted
 */
export const handleDelete = (key, {dispatch, data}) => {
  dispatch(removeEmployee(data.filter((data) => data.key !== key)))
}