const generateMultiplier = (factor) => {
    return (number) => {
        return number * factor
    }
}
const multiplyByTwo = generateMultiplier(2)
const multiplyByThree = generateMultiplier(3)

console.log(multiplyByTwo(5))
console.log(multiplyByThree(5))


// definition :  when an inner func remembers the scope of its parent that forms a closure




// what will be logged to console
// let count = 0;
// (function printCount() {
//     if(count === 0) {
//         let count = 1 ;
//         console.log(count)
//     }
//     console.log(count);
// })
// //1 first & 0
