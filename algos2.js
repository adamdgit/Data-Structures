// second largest number
// Given an array print the second largest number
// input [12,15,1,5,20,22] = 20

const arr = [12,15,1,5,20,22,1,-100,-50,54543,54543,432,112,1,2];

function secondLargestNum(arr) {
  let secondLargest = Number.NEGATIVE_INFINITY;
  let largest = Number.NEGATIVE_INFINITY;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    }
  
    if (arr[i] > secondLargest && arr[i] < largest) {
      secondLargest = arr[i]
    }
  }
  return secondLargest
}

console.log(secondLargestNum(arr))

// Rotate array by K
// Given an array of numbers, rotate the array to the right by k steps

// input: [1,2,3,4,5,6] where k = 3 -> [4,5,6,1,2,3] 

const arr2 = [1,2,3,4,5,6,7,8,9]

function rotateArray(arr, k) {

  for (let i = k; i > 0; i--) {
    arr.unshift(arr.pop())
    console.log(arr)
  }

}

rotateArray(arr2, 3)

// Remove duplicates from sorted array
// return number of unique elements eg: the arr length

// input: [1,1,2,3,4,4,5] -> [1,2,3,4,5]

const arr3 = [1,1,1,1,2,3,4,4,5,5,6,7,7]

// could use inbuilt set method arr.from([...new set[arr]])
function removeDuplicates(arr) {

  let nums = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[i-1]) {
      nums++
    }
  }

  return nums

}

// time complexity of O(n)
// space complexity of O(1)

console.log(removeDuplicates(arr3)) 

// Factorial of given Number n

// input: n=5 -> 5*4*3*2*1 = 120

function factorial(n) {
  if (n === 0) return 1
  else return n * factorial(n-1)
}

console.log(factorial(5))
