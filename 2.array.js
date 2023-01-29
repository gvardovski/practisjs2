let carsmf = ["BMW","Opel","AYDI"]
let str = ""
for (let i = 0; i < carsmf.length; i++){
str += carsmf[i] + " "
}
console.log(str)
let carsmfnew = str.split(" ")
console.log(carsmfnew)