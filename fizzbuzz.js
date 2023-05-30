
// console log the numbers from 1 to n
// but for multiples of three print "fizz"
// and multiples of 5 print "buzz"
// for numbers which are multiples of both 3 & 5 print "fizzbuzz"
// eg: fizzbuzz(5) -> 
// 1,2,fizz,4,buzz

function fizzBuzz(n) {



  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 & i % 5 === 0) console.log("fizz buzz")
    else if (i % 3 === 0) console.log("fizz")
    else if (i % 5 === 0) console.log("buzz")
    else (console.log(i))
  }

}

fizzBuzz(15)