const modal = document.querySelector("#modal");
const modalOpenButton = document.querySelector(".open-button");
const modalCloseButton = document.querySelector(".close-button");

modalOpenButton.addEventListener("click", () => {
  modal.showModal();
});

modal.addEventListener("click", (e) => {
  // console.log(e.target.className);
  if (e.target.className === "close-button") {
    modal.close();
  }
});

modalCloseButton.addEventListener("click", () => {
  modal.setAttribute("closing", "");
  modal.addEventListener(
    "animationend",
    () => {
      modal.removeAttribute("closing");
      modal.close();
    },
    { once: true }
  );
});
