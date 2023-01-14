let [n1, n2, n3, n4] = prompt('Digite as 4 notas:').split(' ')
n1 = parseFloat(n1)
n2 = parseFloat(n2)
n3 = parseFloat(n3)
n4 = parseFloat(n4)
const media = (n1*2 + n2*3 + n3*4 + n4*1) / 10
if (media >= 7.0) {
    console.log(`Média: ${media.toFixed(1)}`)
    console.log('Aluno Aprovado!')
} else if (media < 5.0) {
    console.log(`Média: ${media.toFixed(1)}`)
    console.log('Aluno Reprovado.')
} else {
    const exame = parseFloat(prompt('Qual a nota do exame?'))
    const media = (n1*2 + n2*3 + n3*4 + n4*1) / 10
    const mediaFinal = (media + exame) / 2

    if (mediaFinal > 5.0) {
    console.log(`Média: ${media.toFixed(1)}`)
    console.log('Aluno em exame.')
    console.log(`Nota do exame: ${exame.toFixed(1)}`)
    console.log('Aluno Aprovado!')
    console.log(`Média Final: ${mediaFinal.toFixed(1)}`)
    } else {
    console.log(`Média: ${media.toFixed(1)}`)
    console.log('Aluno em exame.')
    console.log(`Nota do exame: ${exame.toFixed(1)}`)
    console.log('Aluno Reprovado.')
    console.log(`Média Final: ${mediaFinal.toFixed(1)}`)
    }
}