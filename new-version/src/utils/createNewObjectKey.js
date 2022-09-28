export const createNewObjectKey = (input, obj) => {
  return obj[input.id] = input.value;
}