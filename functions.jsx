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