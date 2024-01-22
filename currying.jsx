// sum(2) (6) (1)

// func add(a,b,c) {
    // return a + b + c
// }
// console.log(add(2,6,1))

function sum(a)  {
    return function(b) {
        return function(c){
            return a + b + c
        }
    }
}

console.log(sum(2)(6)(1));

// currying vs partial application

function sum(a) {
    return function(b) {
        return function(c) {
            return a + b + c 
        }
    }
}
const x = sum(10)
console.log(x(5,6));
console.log(x(5,6));