var mask = document.getElementById("maskHolder");

var toggleModal = function () {
  mask.classList.toggle("is-open");
  console.log("You're interacting with the modal window!");
};

mask.addEventListener("click", toggleModal);
