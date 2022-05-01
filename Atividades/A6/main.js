
/*************************
Reusa código de máscara de CEP
*/
import { CEPmask } from "./modules/cepmask.js"


var cep = document.getElementById("cep")

cep.addEventListener('input', () => {
    cep.value = CEPmask(cep.value)
  }, false)


/******************************
API de CEP
*/
import { CEPval } from "./modules/CEPval.js"


var enviar = document.getElementById("enviar")
var resp;

enviar.addEventListener("click", event => {
   
    //para que o submit não recarregue a página
    event.preventDefault()

    //tira o traço do cep
    let newcep = cep.value.replace("-", "")
    
    //precisa ser funcao async pra esperar a resposta de outra (await)
    const defineRua = async () => {
        //espera a resposta pra definir a variável e continuar a função
        const rua = await CEPval(newcep)
        document.getElementById("endereco").innerText = rua
    }
    defineRua()
})
