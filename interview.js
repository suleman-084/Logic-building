//count of fruits and sort by descending order of the count


const fruits = ['orange', "apple", "orange", "kiwi", "grapes", "kiwi", "orange", "grapes", "grapes", "grapes", "orange", "orange", "banana"] 
 // grapes: 4
// orange: 3 
// kiwi: 2
// apple: 1



const fruitCount = fruits.reduce((acc,fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1
  return acc
},{})
console.log(fruitCount)

const sortedFruits = Object.entries(fruitCount).sort((a,b) => b[1] - a[1] ).map(([fruit,count]) => `${fruit}: ${count}`)
console.log(sortedFruits)