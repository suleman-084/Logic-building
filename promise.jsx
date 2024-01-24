// promise.all


const promise1 = Promise.resolve(1);
const promise2 = Promise.reject(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
    .then((results) => {
        console.log("All promises fulfilled:", results); // [1, 2, 3]
    })
    .catch((error) => {
        console.error("One of the promises rejected:", error);
    })

// promise.any

promise1.finally([promise1, promise2, promise3]).then((res)=> {
    console.log("resolved promise", res);
}).catch((rej)=>{
    console.error("all promises rejected",rej)
})

// promise.race
const p1 = Promise.resolve("Error 1");
const p2 = Promise.resolve("Error 2");

Promise.race([promise1, promise2])
  .then((winner) => {
    console.log("First promise to settle", winner); // "Winner 2"
  })
  .catch((reason) => {
    console.error("This should not happen:", reason);
  });

//   promise.allsettled()

