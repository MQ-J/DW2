
/*
Reusa código de máscara de CEP
*/
import { CEPmask } from "./modules/cepmask.js"

var cep = document.getElementById("cep")

cep.addEventListener('input', () => {
    cep.value = CEPmask(cep.value)
  }, false)


/*
API de CEP
*/
import { CEPval } from "./modules/CEPval.js"

var enviar = document.getElementById("enviar")
var resp;

enviar.addEventListener("click", event => {
   
    event.PreventDefault()
  
    let newcep = cep.value.replace("-", "")
    
    document.getElementById("endereco").innerText = CEPval(newcep)

})
