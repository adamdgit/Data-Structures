// Reverse a string

function reverseString(string) {

  const splitstring = string.split("")
  const newString = []
  
  for(let i=splitstring.length-1; i>=0; i--) {
    newString.push(splitstring[i])
  }

  const reversedString = newString.join("")
  console.log(reversedString)

}

reverseString("hello world")

// time complexity of O(3n) = O(n)
const reverseString2 = (string) => string.split("").reverse().join("")

console.log(reverseString2("hello world"))