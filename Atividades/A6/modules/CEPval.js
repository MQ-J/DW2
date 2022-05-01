export async function CEPval(cep) {
 
 //chama API de CEP
 let response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
 
 //pega a resposta
 //let userData = await response.json();
 
 //retorna a resposta
 return userData.logradouro;
}
