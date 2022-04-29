/*
IMPORTANDO MÓDULOS
*/
import { CPF } from "./modules/cpf.js"
import { DATE } from "./modules/date.js"
import { FONE } from "./modules/fone.js"
import { CEP } from "./modules/cep.js"


/*
CHAMANDO FUNÇÕES DAS MÁSCARAS
*/
const masks = {
  cpf (value) {
    return CPF(value)
  },
  date (value) {
    return DATE(value)
  },
  fone (value) {
    return FONE(value)
  },
  cep (value) {
    return CEP(value)
  }
}


/*
CHAMADA DE CADA INPUT
*/
document.querySelectorAll('input').forEach(($input) => {
  const field = $input.dataset.js
  
  $input.addEventListener('input', (e) => {
    e.target.value = masks[field](e.target.value)
  }, false)
})

document.getElementById("button").addEventListener("click",() => {
  alert("oi")
} )