
// optimising time complexity with hash maps

// O(n^2)
function naive_Remove_Duplicates(arr) {
  const unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i])
    }
  }

  return unique
}

console.log(naive_Remove_Duplicates([1,1,2,2,3,3,1,6,7,3,1,7,8,6]))

// O(n), significantly faster
function optimised_Remove_Duplicates(arr) {
  const unique = [];
  const hashmap = {};

  for (let i = 0; i < arr.length; i++) {
    let inputNum = arr[i]
    if(!hashmap[inputNum]) {
      unique.push(inputNum)
    }
    hashmap[inputNum] = true
    console.log(hashmap)
  }

  return unique
}

console.log(optimised_Remove_Duplicates([1,1,2,2,3,3,1,6,7,3,1,7,8,6]))