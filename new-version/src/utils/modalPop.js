import { msg } from "./messages";

/**
 * It takes a string as an argument, and if the string is "success", it adds the class "success" to the
 * modalText element, and if the string is "failure", it adds value of msg.modal.failure to the innerText of modalText
 * element.
 * @param message - "success" or "failure"
 */
export const modalPop = (message) => {
  const modal = document.querySelector("#Modal");
  const modalText = modal.querySelector('p');
  modalText.classList.add(message === "success" ? "success" : "failure");
  modal.style.display = "block";

  if (message === "success") {
    modalText.innerText = msg.modal.success;
  } else {
    modalText.innerText = msg.modal.failure;
  }
};
