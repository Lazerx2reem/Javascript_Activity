let score = 100
let temperature = 36.6
let greeting = "Hello, Javascript! "
let isLearningFun = true

console.log(score, temperature, greeting, isLearningFun)

List = [1,2,3,4,5]
let student = {name : "Arsh", age: 19, subjects: ['CMPSC 263', 'CMPSC 465', 'CMPSC 461', 'CMPSC 311', 'CMPEN 270']}
student.isGraduated = false;

console.log(student)

primeNumbers = [2,3,5,7,11]
console.log(primeNumbers)

let x = 5
let y = 10
let sum = x + y
let product = x*y
let modulus = y%x

for (i in primeNumbers){
    console.log(i)
}

const button = document.querySelector(".btn")

button.onclick = function(){
    console.log("hello world")
}