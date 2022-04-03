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

/*VARIÁVEIS STORAGE ************/
var linha = [];
var colunas = [];
var form = document.getElementById("newtransaction");

/*FUNÇÕES STORAGE ***************/
form.addEventListener("submit", setTabela);

function setTabela() {
  linha.push(document.getElementById("description").value);
  linha.push(document.getElementById("valor").value);
  linha.push(document.getElementById("data").value);
  colunas.push(linha);
  localStorage.setItem("tabela", JSON.stringify(colunas));
  alert(localStorage.getItem("tabela"));
}
