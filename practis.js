const num = 123
const str = "String"
const bool = true
console.log("string + boolean =", str + bool)
console.log("string + number =", str + num)
console.log("number + boolean =", num + bool)
console.log("string * boolean =", str * bool)
console.log("string * number =", str * num)
console.log("number * boolean =", num * bool)
console.log("string / boolean =", str / bool)
console.log("string / number =", str / num)
console.log("number / boolean =", num / bool)
console.log("number / boolean =", num / bool)
let convertNumber = Number(bool)
console.log(typeof(convertNumber))
let convertString = String(num)
console.log(typeof(convertString))
let convertBoolean = Boolean(str)
console.log(typeof(convertBoolean))