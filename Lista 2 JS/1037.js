const numero = parseFloat(prompt('Escolha um número.'))
if (numero < 0 || numero > 100) {
console.log('Fora do Intervalo')
} else if (numero <= 25) {
console.log('Intervalo [0,25]')
} else if (numero <= 50){
console.log('Intervalo (25,50]')
} else if (numero <= 75){
console.log('Intervalo (50,75]')
} else {
console.log('Intervalo (75,100]) ')
}