const arr = [1,1,1]
const newArr1 = [...arr,9] //add no final
const newArr2 = [0, ...arr] // add no inicio

function soma(a,b,c){
    return a+b+c
}

console.log(arr)
console.log(newArr1)
console.log(newArr2)

console.log(soma(1,...arr))