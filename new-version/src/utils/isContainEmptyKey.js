/**
 * It returns true if any of the values in the object are empty strings
 * @param obj - The object to check.
 */
export const isContainEmptyKey = (obj) => Object.values(obj).includes("");
