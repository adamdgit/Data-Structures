const sumUpTo = n => {
  return (n * (n + 1) / 2)
}

const sumUpToSlow = n => {
  let count = 0;
  for (let i = 0; i <n; i++) {
    count += i;
  }
  return count
}

console.log(sumUpToSlow(6))

// big 0 notation and counting operators

// sumUpTo has 3 operations, * + /
// Big'O of O(1)

// SumUpToSlow has 1 x n operations += operation inside for loop
// scales linearly increasing as n increases
// Big'O of O(n)

function msg(n) {
  for (let i = 0; i < n; i++) {
    console.log("hello")
  }
  for (let i = 0; i < n; i++) {
    console.log("hello")
  }
}

// 2 loops, 1 operation in each loop x n iterations
// msg will have O(n)

function nestedLoops(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i] + arr[j])
    }    
  }
}

nestedLoops([1,2,3,4])

// nestedLoops will have O(n^2)

function nestedLoops2(arr, arr2) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      console.log(arr[i] + arr2[j])
    }    
  }
}

nestedLoops2([1,2,3,4], [1,2])

// outer and inner loops iterate through different size arrays
// nestedLoops2 will have O(n * m) arr is n, arr2 is m

// General rules for big O
// Variable assignments such as numbers or booleans
// are O(1) - constant
// strings, arrays and objects take up O(n) - linear
// Ignore small operations, only care about expensive operations as we reach infinity

// O(10) = O(1) - Constant
// O(555) = o(1) - Constant
// O(2n) = O(n) - Linear
// O(log n) - Logarithmic
// O(12n^2) = O(n^2) - Quadratic
// O(2^n) - Exponential