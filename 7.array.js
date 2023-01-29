const arr = [1,17,83,0,10,11,9,7,3,33]
let x = 0
function findIndexofNumberinArray(massiv, number){
    let result = massiv.indexOf(number)
    if (result == -1) console.log("No such number in array")
    else console.log("Index of number in array is ",result)
}
findIndexofNumberinArray(arr,x)