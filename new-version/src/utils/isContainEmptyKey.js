/**
 * It returns true if the key is an empty string, otherwise it returns false
 * @param key - The key to check
 */
export const isContainEmptyKey = (obj) => !Object.values(obj).includes('')