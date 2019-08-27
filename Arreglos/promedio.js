//hallar el minimo/maximo de los valores procesados del arreglo
let a = [4, 8, 2, 5, 10, 3]
let average = getAverage(a)



function getAverage(a) {
    let sum = 0
    for (let i = 0; i < a.length; i++) 
        sum = sum + a[i]
    
    return sum / a.length
}

console.log(getMinValue(a))
console.log(getAverage(a))

function getMinValue() {

    if (a.lenght == 0) return -1
    let min = a[0]
    let minIndex
    for (let i = 0; i < a.length; i++) {
        if (distance(a[i]) < min) {
            min = distance(a[i])
            minIndex=i
        }   
    }
    return minIndex


}


//function square(n){
// return n*n
//}

function distance(n) {
    return Math.abs(n - average)
}