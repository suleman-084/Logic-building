const greet = (callback) => {
    console.log("Hello Iam greet");
    callback()
}
const cb = () => {
    console.log("iam callback");
}
greet(cb)
//definition : func passed into another func as an arguement is called callback 