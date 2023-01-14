let [A, B] = prompt('Digite 2 valores inteiros:').split(' ')
A = parseInt(A)
B = parseInt(B)
if(A%B == 0 || B%A == 0) {
    console.log('São Multiplos')
} else {
    console.log('Não são Multiplos')
}