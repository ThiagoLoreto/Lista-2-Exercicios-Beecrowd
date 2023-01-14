var [x, y] = prompt('Digite 2 valores:').split(' ')
x = parseFloat(x)
y = parseFloat(y)
if (x === 0.0 && y === 0.0) {
    console.log('Origem')
} else if (x > 0 && y > 0) {
    console.log('Q1')
} else if (x > 0 && y < 0) {
    console.log('Q4')
} else if (x < 0 && y > 0) {
    console.log('Q2')
} else {
    console.log('Q3')
}