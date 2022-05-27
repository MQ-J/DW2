console.time("teste")

const numbs = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,
    2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,]

let numero

do {

    numero = numbs[Math.floor(Math.random() * numbs.length)];
    console.log(numero)

} while (numero != 1);

console.timeEnd("teste")
