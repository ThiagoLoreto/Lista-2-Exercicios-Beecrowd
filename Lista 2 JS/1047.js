let [n1, minI, n2, minF] = prompt('Digite 4 valores inteiros, sendo eles Hora Inicial, Min Inicial, Hora Final e Min Final: ').split(' ');

n1 = parseInt(n1)
minI = parseInt(minI)
n2 = parseInt(n2)
minF = parseInt(minF)
if (n1 > 24 || n2 > 24 || minI > 60 || minF > 60) {
    console.log ('POR FAVOR, INFORME UM HORÁRIO VÁLIDO')
} else if (n1 == n2 && minI == minF){
    console.log ('O JOGO DUROU = 24 HORA (S) E 0 MINUTO (S)')
} else if (n2 > n1) {
    if (minI == minF) {
        console.log (`O JOGO DUROU = ${n2-n1} HORA (S)`)
    } else if (minF > minI) {
        console.log (`O JOGO DUROU = ${n2-n1} HORA (S) e ${minF-minI} MINUTO (S)`)
    } else {
        console.log (`O JOGO DUROU = ${n2-n1-1} HORA (S) e ${(60-minI)+minF} MINUTO (S)`)
    }
} else {
    if (minI == minF) {
        console.log (`O JOGO DUROU = ${(24-n1)+n2} HORA (S)`)
    } else if (minF > minI) {
        console.log (`O JOGO DUROU = ${(24-n1)+n2} HORA (S) e ${minF-minI} MINUTO (S)`)
    } else {
        console.log (`O JOGO DUROU = ${(24-n1)+n2-1} HORA (S) e ${(60-minI)+minF} MINUTO (S)`)
    }
} 