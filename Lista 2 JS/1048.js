const salario = parseFloat(prompt('Qual seu salário?')).toFixed(2)

    if (salario < 0) {
        console.log('Por favor, escreva um salário válido')
    } else if (parseFloat(salario) <= 400.00) {
        console.log (`Novo salário = ${(salario*1.15).toFixed(2)}`)
        console.log (`Reaguste ganho = ${(salario*0.15).toFixed(2)}`) 
        console.log ('Em percentual: 15%') 
    } else if (parseFloat(salario) <= 800.00) {
        console.log (`Novo salário = ${(salario*1.12).toFixed(2)}`) 
        console.log (`Reaguste ganho = ${(salario*0.12).toFixed(2)}`) 
        console.log ('Em percentual: 12%') 
    } else if (parseFloat(salario) <= 1200.00) {
        console.log (`Novo salário = ${(salario*1.10).toFixed(2)}`) 
        console.log (`Reaguste ganho = ${(salario*0.10).toFixed(2)}`) 
        console.log ('Em percentual: 10%') 
    } else if (parseFloat(salario) <= 2000.00) {
        console.log (`Novo salário = ${(salario*1.07).toFixed(2)}`) 
        console.log (`Reaguste ganho = ${(salario*0.07).toFixed(2)}`)
        console.log ('Em percentual: 7%') 
    } else {
        console.log (`Novo salário = ${(salario*1.04).toFixed(2)}`) 
        console.log (`Reaguste ganho = ${(salario*0.04).toFixed(2)}`) 
        console.log ('Em percentual: 4%') 
    }