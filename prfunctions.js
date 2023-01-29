// Function Adding

let apples = 10
let pears = 5
const sum = (a,b) => a + b
console.log(sum(apples,pears))

// Function Terminal with name

firstName = "Stas"
firstNameWrong = "John"
function checkName (name){
    if (name == "Stas") {
        console.log("Hello "+name)
    } else {
        console.log("THERE IS NO SUCH NAME") 
    }
}
checkName(firstName)
checkName(firstNameWrong)

// Function calculating the type of the argument

const bool = true
const num = 0
const str = "Typeof"
const typeOfTheArgument = (argument) => console.log(typeof(argument))
typeOfTheArgument(bool)
typeOfTheArgument(num)
typeOfTheArgument(str)


// Function Prime number

let n = 0
function isNumberPrime(num){
if (n > 1){
    for (let i = 2; i < num; i++){
        if (num % i == 0){
        return console.log("number is not prime")
        }
    }
    console.log("number is prime") 
}
else console.log("number is not prime")
}
isNumberPrime(n)