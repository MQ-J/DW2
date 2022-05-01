
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
   
    event.preventDefault()
  
    let newcep = cep.value.replace("-", "")
    
    const defineRua = async () => {
        const rua = await CEPval(newcep)
        document.getElementById("endereco").innerText = await rua
    }
    defineRua()
})
