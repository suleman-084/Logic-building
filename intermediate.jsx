// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

const fizzbuzz = () => {
    let resArray = [];
    for (let i = 0; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            resArray.push("FizzBuzz")
        }
        else if (i % 3 === 0) {
            resArray.push("Fizz")

        }
        else if (i % 5 === 0) {
            resArray.push("Buzz")

        }
        else {
            resArray.push(i)
        }

    }
    return resArray
}
console.log(fizzbuzz())

//   Print the following star pattern :-

// *
// * *
// * * *
// * * * *
// * * * * *

const printStarPattern = (rows) => {
    for (let i = 1; i <= rows; i++) {
        let pattern = ''
        for (let j = 1; j <= i; j++) {
            pattern += '*'
        }
        console.log(pattern);
    }
}
const numberOfRows = 5;
printStarPattern(numberOfRows)

// Write a program to take a number input from user and print multiplication table 12 times for that number.

const userInput = prompt("enter something")
const number = parseInt(userInput)



if (!isNaN(number)) {
    for (let i = 1; i <= 12; i++) {
        console.log(`${number} * ${i} = ${number * i}`)
    }
} else {
    console.log("invalid input");
}


// Write a program to return a Fibonacci series : 0,1,1,2,3,5,8,13,21....

const generateFabonacciSeries = (n) => {
    let fabonacciSeries = [0, 1]

    for (let i = 2; i < n; i++) {
        fabonacciSeries.push(fabonacciSeries[i - 1] + fabonacciSeries[i - 2])
    }
    return fabonacciSeries
}
const numberOfTerms = 10;
console.log(generateFabonacciSeries(numberOfTerms));


// Write a Program to take a number input from user and find if the number is Prime or not.

const isPrime = (numbers) => {
    if (numbers <= 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(numbers); i++) {
        if (numbers % i === 0) {
            return false
        }
    }
    return true

}
const userIp = prompt("enter the number")
const parse = parseInt(userIp)

if (isPrime(parse)) {
    console.log(`${parse} is a prime number`)
}
else {
    console.log(`${parse} is  not a prime number`)
}

// Write a program to take a day as an input and determine whether it is a weekday or weekend. Example: Tuesday is weekday.

const week = prompt("Enter the day")
if (week === "monday" || week === "tuesday" || week === "wednesday" || week === "thursday" || week === "friday") {
    console.log(`${week} is a weekday`);
} else {
    console.log(`${week} is a weekend`);
}


// Write a program to take a number input from user and print multiplication table 12 times for that number.

const userInput = prompt("enter something")
const number = parseInt(userInput)



if (!isNaN(number)) {
    for (let i = 1; i <= 12; i++) {
        console.log(`${number} * ${i} = ${number * i}`)
    }
} else {
    console.log("invalid input");
}
