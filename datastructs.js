// palindromes
// Input: x = 121 --> output true
function checkIsPalindrome(input) {
  if (input < 0) return false;
  // 121 -> "121" -> ["1", "2", "3"] => ["1", "2", "3"] => "121"
  return input === Number(input.toString().split("").reverse().join(""))
}

console.log(checkIsPalindrome(122))


// fibonacci numbers
// 0,1,1,2,3,5,8,13,21,34
// f(n) = f(n) + f(n+1)
function createFibSequencetoN(n) {

  const fib = [0,1]

  for (let i=0; i< n; i++) {
    fib.push(fib[i] + fib[i+1])
  }

  return fib[n]
}

console.log(createFibSequencetoN(9))

// using recursion
function fib2(n) {
  if (n <= 1) return n
  return fib2(n-1) + fib2(n-2)
}

console.log(fib2(10))


// Anagrams

// input: s = "anagram", t = "nagaram" => output true
// slow solution
function checkIsAnagram(s, t) {
  s = s.split("").sort().join("")
  t = t.split("").sort().join("")

  return s === t
}

console.log(checkIsAnagram("anagram", "nagaram"))

// faster solution
function checkIsAnagramFast(s, t) {
  if (s.length !== t.length) return false;

  let obj1 = {};
  let obj2 = {};

  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  };

  for (const key in obj1) {
    if(obj1[key] !== obj2[key]) return false;
  };

  return true;
};

console.log(checkIsAnagramFast("rac", "car"))


// Two sums

// Given an array of integers and an integer target
// return indicies of the two numbers such that they add up to a target

// eg: nums = [5,4,3], target = 9
// 5 + 4 = 9, so indicies 0 & 1 are correct

function calcIndicies(arr, target) {
   // for loop -> check if numbers added together === target
   for (let i=0; i<arr.length; i++) {
    for (let j=i+1; j<arr.length; j++) {
      if (arr[i] + arr[j] === target) return [i, j]
    }
   }
}

console.log(calcIndicies([5,1,2,312,3,4], 9))

// faster solution

function twoSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const diffIndex = array.indexOf(target - array[i]);
    if (diffIndex >= 0 && diffIndex !== i) {
      return [i, diffIndex];
    }
  }
  return [];
}

console.log(twoSum([40,2,7,11,44,15], 26))