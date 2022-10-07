export  const filterEmployee = (data, inputValue) =>
data["first-name"].toLowerCase().includes(inputValue.toLowerCase()) ||
data["last-name"].toLowerCase().includes(inputValue.toLowerCase()) ||
data["department"].toLowerCase().includes(inputValue.toLowerCase());