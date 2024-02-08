//spread: allows you to indefinite array of arguements


const numbers = (...numbers) => {
    return numbers.reduce((acc, curr) => {
        return acc + curr
    }, 0)
}

console.log(numbers(1, 2, 3, 4, 5))

//spread: is used to spread an element of an array or object into another array or object

const a = [1 , 2]
const b =- [3 , 4 ]
const c = [...a, ...b]