//1. Write a program to add 5 numbers. The value of numbers are num1=5, num2=13, num3=7, num4=21 and num5=48.

const num1 = 5
const num2 = 13
const num3 = 7
const num4 = 21
const num5 = 48
const add = num1 + num2 + num3 + num4 + num5
// console.log("addition is", add)
//OR 
const numbers = [5, 13, 7, 21, 48]
const addition = numbers.reduce((a, b) => a + b)
console.log("addition is only delulu", addition)

// 2.Write a program to take a number input from user and determine whether the number is odd or even.

// const userInput = prompt("Enter a number ")
// const number = parseInt(userInput)

// if(number % 2 === 0 ) {
//   alert(number + "is even")
// } else {
//   alert(number + "is odd")
// }           
// OR

const userInput = prompt("Enter a number ");
const number = parseInt(userInput);

if (isNaN(number)) {
    alert("Invalid input. Please enter a valid number.");
} else if (number % 2 === 0) {
    alert(number + " is even.");
} else {
    alert(number + " is odd.");
}


// Write a program to find the maximum and minimum out of two given numbers. The numbers are num1=129 and num2=251.

const number1 = 129;
const number2 = 251;

const maximum = Math.max(number1, number2)
console.log("max is ", maximum)
const minimum = Math.min(number1, number2)
console.log("min is ", minimum)

//Write a program to find the maximum out of three given numbers. The numbers are num1=8, num2=23 and num3=17.

const numb1 = 8;
const numb2 = 23;
const numb3 = 17;

const max =  Math.max(numb1,numb2,numb3);
console.log("max is ", max)

// Write a program to find the minimum out of three given numbers. The numbers are num1=35, num2=29 and num3=46.

const n1 = 35;
const n2 = 29;
const n3 = 46;

const min =  Math.min(n1,n2,n3);
console.log("min is ", min)


// Write program to take a month as an input from the user and find out whether the month has 31 days or not.

const month = prompt("Enter a month:").toLowerCase();

if (
  month === "january" ||
  month === "march" ||
  month === "may" ||
  month === "july" ||
  month === "august" ||
  month === "october" ||
  month === "december"
) {
  console.log(`${month} has 31 days.`);
} else if (month === "february") {
  console.log(`${month} has either 28 or 29 days, depending on the year.`);
} else if (
  month === "april" ||
  month === "june" ||
  month === "september" ||
  month === "november"
) {
  console.log(`${month} has 30 days.`);
} else {
  console.log("Invalid month input.");
}


