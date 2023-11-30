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