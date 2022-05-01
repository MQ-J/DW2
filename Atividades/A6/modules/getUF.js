export async function getUF(cep) {
 
 //chama API de CEP, e pausa a função até que a resposta venha
 let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`).then( response => response.json()).then( address => address.uf)
 
 //retorna a resposta
 return response
}
