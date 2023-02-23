// (1) Print odd numbers in an array

// Arrow Function
// Code:

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

var oddNumbers = arr.filter((num) => num % 2 !== 0);

console.log(oddNumbers);                                 // [1, 3, 5, 7, 9]

//_____________________________________________________________________________________________________

// (2) Convert all the strings to title caps in a string array

// Arrow Function
// Code:

var arr = ["hello", "world", "javascript"];

var titleCaps = arr.map(str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});

console.log(titleCaps);                                // ["Hello", "World", "Javascript"]

//_____________________________________________________________________________________________________

// (3) Sum of all numbers in an array

// Arrow Function
// Code:

const arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((total, num) => total + num, 0);

console.log(sum);                                       // 15

//_____________________________________________________________________________________________________

// (4) Return all the prime numbers in an array

// Arrow Function
// Code:

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var isPrime = num => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

var primes = arr.filter(isPrime);

console.log(primes);

//_____________________________________________________________________________________________________

// (5) Return all the palindromes in an array

// Arrow Function
// Code:


var words = ['racecar', 'level', 'hello', 'civic', 'world'];

var palindromes = words.filter(word => {
  var reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
});

console.log(palindromes); 

//_____________________________________________________________________________________________________
