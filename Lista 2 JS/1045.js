var [A, B, C] = prompt('Digite 3 valores inteiros:').split(' ')
A = parseFloat(A)
B = parseFloat(B)
C = parseFloat(C)

var menor = Number
var medio = Number      
var maior = Number

if (A<B && A<C){
    menor = A;
    if (B<C){
        medio = B;
        maior = C;
    } else {
        medio = C;
        maior = B;
    }
} else if (B<A && B<C) {
    menor = B;
    if(A<=C){
        medio = A;
        maior = C;
    } else {
        medio = C;
        maior = A;
    }
} else if (C<A && C<B) {
    menor = C;
    if (A<B){
        medio = A;
        maior = B;
    } else {
        medio = B;
        maior = A;
    }
} else if (A==B && A>C) {
    maior = A;
    medio = B;
    menor = C;
} else if (A==C && A>B) {
    maior = A;
    medio = C;
    menor = B;
} else if (B==C && B>A) {
    maior = B;
    medio = C;
    menor = A;
} else if (A==B && A<C) {
    maior = C;
    medio = A;
    menor = B;
} else if (A==C && A<B) {
    maior = B;
    medio = A;
    menor = C;
} else {
    maior = A;
    medio = B;
    menor = C;
}
if (maior >= medio + menor){
    console.log('Não forma triângulo')
} else if (maior**2 == medio**2 + menor**2) {
        console.log('Triângulo Retangulo')
    } else if(maior**2 > medio**2 + menor**2){
        console.log('Triângulo Obtusangulo')
    } else if (maior**2 < medio**2 + menor**2) {
        console.log('Triângulo Acutangulo')
    }
if(maior == medio && medio== menor){
    console.log('Triângulo Equilatero')
} else if ((maior==medio && medio!=menor) || (maior==menor && menor!=medio) || (medio==menor && menor!=maior)){
    console.log('Triângulo Isosceles')
} else {
    console.log(' ')
}