// Fizzbuzz - Write a program to return an array from 1 to 100. But for every multiple of 3, replace the number with "Fizz", for every multiple of 5, replace the number with "Buzz" and for every multiples of 3 & 5, replace with "FizzBuzz".

const fizzbuzz = () => {
    let resArray = [];
    for(let i=0; i<=100; i++) {
      if(i % 3 === 0 && i % 5 === 0){
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
    for(let i=1; i<= rows; i++)
    {
        let pattern = ''
        for(let j=1; j<=i; j++){
            pattern += '*'
        }
        console.log(pattern);
    }
}
const numberOfRows = 5;
printStarPattern(numberOfRows)

// Write a program to take a number input from user and print multiplication table 12 times for that number.

// const userInput = prompt("enter something")
// const number = parseInt(userInput)
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter something: ', (userInput) => {
  const number = parseInt(userInput);
//   console.log(number);
  rl.close();
});


if(!isNaN(number)){
    for(let i=1; i<=12; i++){
        console.log(`${number} * ${i} = ${number * i}`)
    }
}else {
    console.log("invalid input");
}