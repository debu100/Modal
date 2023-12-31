// VARIABLES
const modal = document.querySelector(".modal"),
  btn = document.querySelector(".btn");
// close = document.querySelector(".close");

btn.addEventListener("click", openModal);
// close.addEventListener("click", closeModal);
// modal.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  const evt = e.target.classList;
  if (evt.contains("modal") || evt.contains("close")) {
    closeModal();
  }
});

// OPEN MODAL
function openModal(e) {
  e.preventDefault();
  modal.style.display = "block";
}
// CLOSE MODAL
function closeModal() {
  modal.style.display = "none";
}
