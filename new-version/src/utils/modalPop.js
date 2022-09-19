import { msg } from "./messages";

export const modalPop = (message, inputsToClear) => {
  const modal = document.querySelector("#Modal")
  const modalText = modal.children[1]
  modalText.innerText = message

  modal.style.display = "flex";

  if(message === msg.modal.success){
    inputsToClear.forEach((input) => input.value = "")
  }
}