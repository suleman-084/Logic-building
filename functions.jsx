// Given a and b, your function should return the value of ab
// Example:
// Input: power(2,3) ––> Output: 8


const power = (a,b) => {
    return Math.pow(a,b)

}
const results = power(5,3)
console.log("power is", results);


// Given length of a regular hexagon, your function should return area of the hexagon.
// Example:
// Input: areaOfHexagon(10) ––> Output: 259.80

const areaOfHexagon = (side) => {
    const area = (3 * Math.sqrt(3)/2) * Math.pow(side,2)
    return area.toFixed(2)
}
const output = areaOfHexagon(10)
console.log("area is", output);

// Given a sentence, your functions should return the number of words in the sentence.
// Example:
// Input: noOfWords(We are neoGrammers) ––> Output: 3

const noOfWords = (sentence) => {
    const wordArray = sentence.split(" ")
    return wordArray.length

}
const words = noOfWords("we are gamers")
console.log("no of words = ", words);

// Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMin(3,5) ––> Output: 3
// Input: findMin(3,5,9,1) ––> Output: 1
// (Hint: Lookup rest parameters in JavaScript)


const findMin = (...numbers) => {
    const min = Math.min(...numbers)
    return min

}
const resMin = findMin(3,5)
console.log("minimum is", resMin);
const resMin2 = findMin(3,5,9,1)
console.log("minimum is", resMin2);


// Given n numbers, your function should return the maximum of them all. The number of parameters won't be accepted from user.
// Example:
// Input: findMax(3,5) ––> Output: 5
// Input: findMax(3,5,9,1) ––> Output: 9
// (Hint: Lookup rest parameters in JavaScript)

const findMax = (...number) => {
    const max = Math.max(...number)
    return max
}

const resMax = findMax(3,5)
console.log("maximum is", resMax);
const resMax2 = findMax(3,5,9,1)
console.log("maximum is", resMax2);