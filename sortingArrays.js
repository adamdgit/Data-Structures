
// bubble sort
// loops through each number, if prev num > next num swap next num and prev num

const arr = Array.from({length: 29501}, () => Math.floor(Math.random() * 4000));

// helper swapping function
function swap(arr, i, j) {
  return [arr[i], arr[j]] = [arr[j], arr[i]]
}

// O(n^2) - technically 0.5 * (n^2 + n)
function bubbleSort(arr) { 

  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - j; i++) {
      if (arr[i] > arr[i + 1]) swap(arr, i, i+1) // swap elements
    }
  }

  return arr

}

console.time("bubble: ")
//bubbleSort(arr)
console.timeEnd("bubble: ")

// O(n^2)
function selectionSort(arr) {

  for (let i=0; i<arr.length; i++) {
    let swapIndex = i;
    for (let j=i+1; j<arr.length; j++) {
      if (arr[j] < arr[swapIndex]) swapIndex = j
    }
    swap(arr, i, swapIndex)
  }

  return arr
}

console.time("selection: ")
//selectionSort(arr)
console.timeEnd("selection: ")

// takes in 2 sorted arrays and merges them and sorts them again
// can be solved with O(n) complexity
function mergeSort(sorted1, sorted2) {
  let pointer1 = 0
  let pointer2 = 0
  let result = []

  while (pointer1 < sorted1.length && pointer2 < sorted2.length) {
    if(sorted1[pointer1] < sorted2[pointer2]) {
      result.push(sorted1[pointer1])
      pointer1 ++
    } else {
      result.push(sorted2[pointer2])
      pointer2 ++
    }
  }

  while (pointer1 < sorted1.length) {
    result.push(sorted1[pointer1])
    pointer1 ++
  }

  while (pointer2 < sorted2.length) {
    result.push(sorted2[pointer2])
    pointer2 ++
  }

  return result
}

const arr1 = [1,2,3,4]
const arr2 = [5,6,7]
//console.log(mergeSort(arr1, arr2))

// Time complexity of O(n * log * n)
function quickSort(arr) {
  if (arr.length < 2) return arr
  let pivot = arr[Math.floor(arr.length / 2)]; // create a pivot number from the array to start
  let left = [];
  let right = [];

  for (let i = 0; i < arr.length -1; i++) {
    if (arr[i] < pivot) left.push(arr[i])      
    else right.push(arr[i])
  }

  return [...quickSort(left), pivot, ...quickSort(right)]
}



console.time("quick: ")
quickSort(arr)
console.timeEnd("quick: ")





const test = Array.from({length: 29500}, () => Math.floor(Math.random() * 4000));



function adamSort(arr) {

  let data = {
    largest: { num: -Infinity, index: 0 },
    smallest: { num: Infinity, index: 0 }
  }
  let counter1 = 0;
  let counter2 = arr.length;

  // get largest and smallest numbers
  for (let i = counter1; i < counter2; i++) {
    for (let j = counter1; j < counter2; j++) {
      if (data.largest.num < arr[j]) {
        data.largest.num = arr[j]
        data.largest.index = j
      }
      if (data.smallest.num > arr[j]) {
        data.smallest.num = arr[j]
        data.smallest.index = j
      }
    };

    // largest swap
    let temp1 = arr[data.largest.index];

    if (arr[counter2 -1] === data.smallest.num) {
      data.smallest.index = data.largest.index
    }

    if (arr[counter1] === data.largest.num) {
      data.largest.index = data.smallest.index
    }

    arr[data.largest.index] = arr[counter2 -1];
    arr[counter2 -1] = temp1;

    // smallest swap
    let temp2 = arr[data.smallest.index];
    arr[data.smallest.index] = arr[counter1];
    arr[counter1] = temp2;

    data.largest.num = -Infinity;
    data.smallest.num = Infinity;

    counter1++;
    counter2--;

    if (counter1 >= counter2) return arr
  }

}

console.time("adam: ")
adamSort(test)
console.timeEnd("adam: ")