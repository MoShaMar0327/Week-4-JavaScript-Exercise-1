// TODO: Create a function called ‘multiply’ that will take in 3 parameter and multiply all 3 numbers together. Note: The argument passed must NOT be the same number. 
function multiply(x, y, z){
  if(x === y || y === z || x === z){
    throw new error("Arguments should not be the same number!");
  }
  return x * y * z
}

console.log(multiply(3, 7, 13))

// TODO: Create a function expression called ‘convertToSeconds’ that takes in anumber of minutes as an argument and returns the amount in seconds. ***Do not use a console.log() inside of the function***
const convertToSeconds = function(minutes){
  return minutes * 60
}

console.log(convertToSeconds(86))

// TODO: Create a function called fahrenheitToCelsius that takes the temperature as an parameter and returns the equivalent temperature in Celsius. ***Do not use a console.log() inside of the function***
function fahrenheitToCelsius(tempFah){
  const tempCel = (tempFah - 32) * 5/9
  return Math.round(tempCel * 100) / 100
}

console.log(fahrenheitToCelsius(110))

// TODO: Create a function that takes a string as a parameter and returns the reverse of the string. ***Do not use a console.log() inside of the function ***
function reverseString(normalString){
  return normalString.split("").reverse().join("");
}

console.log(reverseString("Jimbo"))

// TODO: Create a function that takes in a string and returns the number of Vowels in the sentence. E.g. count Vowels(‘Javascript’) 
// output = 3 ***Do not use a console.log() inside of the function***
function countVowels(str) {
  const vowels = new Set(["a", "e", "i", "o", "u"])
  let count = 0

  for (const vowel of str.toLowerCase()) {
    if (vowels.has(vowel)) {
      count++
    }
  }

  return count;
}

console.log(`Output: ${countVowels("Yojimbo")} vowels`)

// TODO: Create a “isPrime” function that takes a number as a parameter and returns true if the number is prime, and false otherwise. Make sure to test your code with 4 numbers
function isPrime(num){
  if (num <= 1){
    return false
  }
  if (num === 2){
    return true
  }
  if (num % 2 === 0){
    return false
  }
  for (let i = 3; i <= Math.sqrt(num); i += 2){
    if(num % i === 0) return false
  }

  return true
}

function checkPrimeNumbers(n1, n2, n3, n4){
  return [n1, n2, n3, n4].map(isPrime)
}

console.log(checkPrimeNumbers(7, 13, 47, 86))