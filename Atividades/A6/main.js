
/*
Reusa código de máscara de CEP
*/
import { CEP } from "./modules/cep.js"

var cep = document.getElementById("cep")

cep.addEventListener('input', () => {
    cep.value = CEP(cep.value)
  }, false)
