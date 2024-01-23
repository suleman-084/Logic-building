const greet = (cb) => {
    console.log("Hello Iam greet");
    cb()
}
const cb = () => {
    console.log("iam callback");
}
greet(cb)