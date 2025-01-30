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

primeNumbers[1] = 3;
console.log(primeNumbers);

let num1 = 10;
let num2 = 3;
console.log("Sum:", num1 + num2);
console.log("Product:", num1 * num2);
console.log("Modulus:", num1 % num2);

let x = 5, y = 10;
console.log("x > y:", x > y);
console.log("x < y:", x < y);
console.log("x === y:", x === y);

console.log("Logical AND:", true && false);
console.log("Logical OR:", true || false);

if (score > 50) {
    console.log("Great job!");
} else {
    console.log("Keep trying!");
}

for (let num of primeNumbers) {
    console.log(num);
}

while (score > 0) {
    score--;
}


// JS function: Event Countdown
function eventCountdown(eventDate) {
    const now = new Date();
    const event = new Date(eventDate);
    const timeDiff = event - now;

    let seconds = Math.floor(timeDiff / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);

    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    return `${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds remaining until the event.`;
}

const countdownMessage = eventCountdown('December 31, 2024 23:59:59');
console.log(countdownMessage);

// Swap function
function swap(a, b, c) {
    return [c, a, b];
}

let values = swap(1, 2, 3);
console.log(values);

// Find the longest word function
function findLongestWord(sentence) {
    const words = sentence.split(' ');
    let longestWord = "";
    
    for (let word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }
    return longestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));