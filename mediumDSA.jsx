//Given an array and an item, your function should return the index at which the item is present.
// Example:
// Input: indexOf([1,6,3,5,8,9], 3) ––> Output: 2

function indexOf(arr, item) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
            return i;
        }
    }
    // Return -1 if the item is not found in the array
    return -1;
}

// Test the function
console.log(indexOf([1, 6, 3, 5, 8, 9], 3)); // Output: 2


//Given an array and two numbers, your function should replace all entries of first number in an array with the second number.
// Example:
// Input: replace([1,5,3,5,6,8], 5, 10) ––> Output: [1,10,3,10,6,8]

function replace(array, target, replacement) {
    return array.map(item => item === target ? replacement : item);
}