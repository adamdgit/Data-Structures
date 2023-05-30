

// Given a phrase, substitube each character by shifting it up
// the alphabet by a given int
// should wrap around back to start of the alphabet
// only shift letters
// eg: ("abcd", 1) => "bcde"
// ("xyz", 2) => "z,a,b"

function caesarCipher(str, shift) {

  const arr = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";

  for (let i = 0; i < str.length; i++) { 
    const char = str[i];
    const index = arr.indexOf(char)
    if (index === -1) {
      result += char
    } else {
      const shiftedChar = (index + shift) % 26;
      result += arr[shiftedChar]
    }
  }

  console.log(result)

}

// O(26n) because index of is a loop but always 26 iterations
// O(n)

caesarCipher("The secret number is 8, this message will be encoded ", 13)
