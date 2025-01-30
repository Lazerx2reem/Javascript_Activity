let score = 100
let temperature = 36.6
let greeting = "Hello, Javascript! "
let isLearningFun = true

console.log(score);
console.log(temperature);
console.log(greeting);
console.log(isLearningFun);

let student = {name : "Arsh", age: 19, subjects: ['CMPSC 263', 'CMPSC 465', 'CMPSC 461', 'CMPSC 311', 'CMPEN 270']}
student.isGraduated = false;

primeNumbers = [2,3,5,7,11]
primeNumbers[1] = 4
console.log(primeNumbers[1] + " Mistake detected");

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