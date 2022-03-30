/* VARIÁVEIS MODAL *********************************************/

// botão que ativa modal
var novo = document.getElementById("novo");

// o modal
var modal = document.getElementById("modal");

// botão que faz modal sumir
var fecha = document.getElementById("reset");

/* FUNÇÕES MODAL **********************************************/

// Função que ativa modal
novo.addEventListener("click", iniModal);
function iniModal () {
  modal.classList.add("active");
}

// Função que desativa modal
fecha.addEventListener("click", fimModal);
function fimModal () {
  modal.classList.remove("active");
}
