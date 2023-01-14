let [n1, n2] = prompt('Digite 2 valores inteiros, sendo eles Hora Inicial e Hora Final:').split(' ')
    n1 = parseInt(n1)
    n2 = parseInt(n2)

    if (n1 > 24 || n2 > 24) {
        console.log('POR FAVOR, INFORME UM HORÁRIO VÁLIDO')
    } else if (n1 == n2){
        console.log('O JOGO DUROU = 24 HORA (S)')
    } else if (n2 > n1) {
        console.log(`O JOGO DUROU = ${n2-n1} HORA (S)`)
    } else {
        console.log(`O JOGO DUROU = ${(24-n1)+n2} HORA (S)`)
    }  