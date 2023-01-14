const subfilo = prompt('vertebrado ou invertebrado?')
const classe = prompt('Qual a classe?')
const ordem = prompt('Tipo de dieta?')

    if (subfilo == 'vertebrado') {
        if (classe == 'ave') {
            if (ordem == 'carnivoro') {
                console.log('aguia')
            } else {
                console.log('pomba')
            }
        } else {
            if (ordem == 'onivoro') {
                console.log('homem')
            } else {
                console.log('vaca')
            }
        }
    } else {
        if (classe == 'inseto') {
            if (ordem == 'hematofago') {
                console.log('pulga')
            } else {
                console.log('lagarta')
            }
        } else {
            if (ordem == 'hematofago') {
                console.log('sanguessuga')
            } else {
                console.log('minhoca')
            }
        }
    }
