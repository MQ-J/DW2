
/*************************
Reusa código de máscara de CEP
*/
import { CEPmask } from "./modules/cepmask.js"


const cep = document.getElementById("cep")

cep.addEventListener('input', () => {
    cep.value = CEPmask(cep.value)
  }, false)


/******************************
API de CEP + Casos Covid
*/
import { getUF } from "./modules/getUF.js"
import { getCASES } from "./modules/getCASES.js"


const enviar = document.getElementById("enviar")
const estado = document.getElementById("estado")
const casos = document.getElementById("casos")

enviar.addEventListener("click", event => {
   
    //para que o submit não recarregue a página
    event.preventDefault()

    //tira o traço do cep
    let newcep = cep.value.replace("-", "")
    
    //precisa ser funcao async, que é pausada para poder esperar a resposta de outra (await)
    const UFandCASES = async () => {
      
      //recebe o UF
      const UF = await getUF(newcep)
      estado.innerText = UF
      
      //recebe o numero de casos  
      const CASES = await getCASES(UF)
      casos.innerText = CASES
    }
    
    UFandCASES()
})
