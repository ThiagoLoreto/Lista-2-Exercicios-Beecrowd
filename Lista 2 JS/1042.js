let [n1, n2, n3] = prompt('Digite 3 valores inteiros:').split(' ')   
    n1 = parseInt(n1)
    n2 = parseInt(n2)
    n3 = parseInt(n3)
        if(n1 > n2 && n2 > n3) {
            console.log(`${n3}`)
            console.log(`${n2}`)
            console.log(`${n1}`)
        } else if(n2 > n1 && n1 > n3) {
            console.log(`${n3}`)
            console.log(`${n1}`)
            console.log(`${n2}`)
        } else if(n3 > n2 && n2 > n1) {
            console.log(`${n1}`)
            console.log(`${n2}`)
            console.log(`${n3}`)
        } else if(n2 > n3 && n3 > n1) {
            console.log(`${n1}`)
            console.log(`${n3}`)
            console.log(`${n2}`)
        } else if(n3 > n1 && n1 > n2) {
            console.log(`${n2}`)
            console.log(`${n1}`)
            console.log(`${n3}`)
        } else {
            console.log(`${n2}`)
            console.log(`${n3}`)
            console.log(`${n1}`)
        }
        console.log(` `)
        console.log(`${n1}`)
        console.log(`${n2}`)
        console.log(`${n3}`)