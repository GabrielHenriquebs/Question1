var entrada = require('readline-sync')
var n = 0

var p = Math.floor(Math.random() *100);

console.log(p)

var contador = 1

while (n != p) {
var n = parseFloat(entrada.question('Digite um numero: '))

    if ( n > p ) {
        console.log('O número é maior que o numero escolhido!');
        contador++
    } else if (  n < p) {
        console.log('O número é menor que o numero sorteado!');
        contador++
    } else {
        console.log('Igual ao número escolhido pelo computador, obrigado!');
        console.log(`Voce tentou ${contador} vezes!!!`)
        break
    }

    while (  Pergunta != "nao"){
        var Pergunta = entrada.question(" Voce deseja continuar? sim ou nao ").toLowerCase()

        if( Pergunta == "sim" ){
            console.log("Vamos continuar tentando!");
            break
            
        }
        else if( Pergunta =="nao" ){
            console.log("Terminamos por aqui!");
            console.log(`Voce tentou ${contador} vezes`)
            break
        }
        else {
            console.log("Opçao invalida!!!!")
        }
    }

    if( Pergunta == "nao"){
        break
    }
       
}