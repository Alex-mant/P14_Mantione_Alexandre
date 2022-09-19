export const createNewEmployeeEntries = (input, state) => {
  const newKey = input.id;
    return state[newKey] = input.value;
}