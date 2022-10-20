import { msg } from "./messages";

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
