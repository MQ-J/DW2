export async function CEPval(cep) {
 
 //chama API de CEP
 let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then( response => response.json()).then( address => address.logradouro)
 
 //retorna a resposta
 return await response
}
