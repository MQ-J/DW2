/* MODAL *************/

// variável
var modal = document.getElementById("modal");

// função
const Modal = {
  open() {
    /*add active class in modal*/
    modal.classList.add("active");
  },
  close() {
    /*remove active class in modal*/
    modal.classList.remove("active");
  }
}

/*STORAGE ************/
