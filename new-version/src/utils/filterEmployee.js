/**
 * It returns true if the inputValue is found in any of the three fields of the data object.
 * @param data - This is the data that is being filtered.
 * @param inputValue - The value of the input field
 */
export  const filterEmployee = (data, inputValue) =>
data["first-name"].toLowerCase().includes(inputValue.toLowerCase()) ||
data["last-name"].toLowerCase().includes(inputValue.toLowerCase()) ||
data["department"].toLowerCase().includes(inputValue.toLowerCase());