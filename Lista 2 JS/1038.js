let [codigo, quantidade] = prompt('Digite o codigo e a quantidade desejada:').split(' ')
codigo = parseInt(codigo)
quantidade = parseInt(quantidade)
switch (codigo) {
    case 1:    
        console.log(`Total: R$ ${(quantidade*4.00).toFixed(2)}`)
        break
    case 2:
        console.log(`Total: R$ ${(quantidade*4.50).toFixed(2)}`)
        break
    case 3:
        console.log(`Total: R$ ${(quantidade*5.00).toFixed(2)}`)
        break
    case 4:
        console.log(`Total: R$ ${(quantidade*2.00).toFixed(2)}`)
        break
    case 5:
        console.log(`Total: R$ ${(quantidade*1.50).toFixed(2)}`)
        break
}