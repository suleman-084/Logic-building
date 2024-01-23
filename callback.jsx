const greet = (callback) => {
    console.log("Hello Iam greet");
    callback()
}
const cb = () => {
    console.log("iam callback");
}
greet(cb)