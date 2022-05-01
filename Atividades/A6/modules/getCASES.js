export async function getCASES(uf) {
 
 //chama API de CEP, e pausa a função até que a resposta venha
 let response = await fetch(`https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/${uf}`).then( response => response.json()).then( covid => covid.cases)
 
 //retorna a resposta
 return response
}