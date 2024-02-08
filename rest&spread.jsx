//spread: allows you to indefinite array of arguements


const numbers = (...numbers) => {
    return numbers.reduce((acc, curr) => {
        return acc + curr
    }, 0)
}

console.log(numbers(1, 2, 3, 4, 5))