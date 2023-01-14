let [A, B, C] = prompt('Digite 3 valores inteiros:').split(' ')
A = parseFloat(A)
B = parseFloat(B)
C = parseFloat(C)
const areatrapezio = (A + B) * C / 2
const perimetrotriangulo = A + B + C
if(A + B <= C || A + C <= B || B + C <= A) {
    console.log(`Área = ${areatrapezio.toFixed(1)}`)
} else {
    console.log(`Perimetro = ${perimetrotriangulo.toFixed(1)}`)
}