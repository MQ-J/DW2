
/*************************
Reusa código de máscara de CEP
*/
import { CEPmask } from "./modules/cepmask.js"


const cep = document.getElementById("cep")

cep.addEventListener('input', () => {
    cep.value = CEPmask(cep.value)
  }, false)


/******************************
API de CEP
*/
import { getUF } from "./modules/getUF.js"


const enviar = document.getElementById("enviar")
const estado = document.getElementById("estado")

enviar.addEventListener("click", event => {
   
    //para que o submit não recarregue a página
    event.preventDefault()

    //tira o traço do cep
    let newcep = cep.value.replace("-", "")
    
    //precisa ser funcao async pra esperar a resposta de outra (await)
    const defineUF = async () => {
        //espera a resposta pra definir a variável e continuar a função
        const UF = await getUF(newcep)
        estado.innerText = UF
    }
    defineUF()
})
