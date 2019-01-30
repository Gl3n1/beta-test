// 1. Given an array [1,4,5,7,12, 19, 45, 101], write a function that returns array that satisfies this condition: x*2 - (5 - x) == even number

const arr = [1,4,5,7,12, 19, 45, 101];

function isTrue(arr) {
  return arr.filter(num=>(num*2-(5-num)) % 2 === 0)
}

console.log(isTrue(arr))

isTrue(arr)