const person = {name: "suleman"} 

 function sayHi(age) {
    return `${this.name} is ${age}`
}
console.log(sayHi.call(person,24));
console.log(sayHi.bind(person,24));

//
var status =  "global"
setTimeout(() => {
    const status = "func"
    const data = {
        status : "avacado",
        getStatus() {
            return this.status
        }
    }
    console.log(data.getStatus());
    console.log(data.getStatus.call(this));

},0)