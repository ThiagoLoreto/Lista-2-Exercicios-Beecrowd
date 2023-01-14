let [A, B, C, D] = prompt('Digite 4 valores:').split(' ')
A = parseInt(A)
B = parseInt(B)
C = parseInt(C)
D = parseInt(D)
let somaab = A + B
let somacd = C + D
if (B > C && D > A && somacd > somaab && C > 0 && D > 0 && A%2 == 0) {
    console.log('Valores aceitos')
} else {
    console.log('Valores não aceitos')
}