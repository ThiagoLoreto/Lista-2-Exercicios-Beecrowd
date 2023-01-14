let [a, b, c] = prompt('Digite três valores:').split(' ')
a = parseFloat(a)
b = parseFloat(b)
c = parseFloat(c)
let delta = b**2 - 4*a*c
let bhaskaraPositivo = (-b + Math.sqrt(delta))/(2*a)
let bhaskaraNegativo = (-b - Math.sqrt(delta))/(2*a)
if (a == 0 || delta < 0){
    console.log('Impossivel calcular')
} else {
    console.log(`R1 = ${bhaskaraPositivo.toFixed(5)}`)
    console.log(`R2 = ${bhaskaraNegativo.toFixed(5)}`)
}