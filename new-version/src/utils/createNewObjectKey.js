/**
 * It takes an input and an object, and returns the object with a new key/value pair, where the key is
 * the input's id, and the value is the input's value.
 * @param input - {id: "name", value: "John"}
 * @param obj - {} to storage all infos before API Sending
 * @returns The value of the input.value
 */
export const createNewObjectKey = (input, obj) => {
  return (obj[input.id] = input.value);
};
