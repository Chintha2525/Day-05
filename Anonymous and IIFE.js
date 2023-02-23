// Programs in ANONYMOUS Function and IIFE

// (1) Print the odd numbers in array

// Anonymous function
// code:

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
var oddNumbers = numbers.filter(function(numbers) {
  return numbers % 2 !== 0;
});

console.log(oddNumbers);      // [1, 3, 5, 7, 9, 11, 13]

// IIFE 
// code:

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

(function() {
  var oddNumbers = numbers.filter(function(numbers) {
    return numbers % 2 !== 0;
  });
  console.log(oddNumbers);        
})();                          // [1, 3, 5, 7, 9, 11, 13]

//______________________________________________________________________________________________

// (2) Convert all the strings to title caps in a string array

// Anonymous function
// code:

var strings = ["hello chintha", "how are you?", "i'm fine, thanks"];

var titleCaps = strings.map(function(string) {
  return string.split(" ").map(function(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(" ");
});

console.log(titleCaps);            // ['Hello Chintha', 'How Are You?', "I'm Fine, Thanks"]

// IIFE 
// code:

var string = ["hello chintha", "how are you?", "i'm fine, thanks"];

var titleCap = (function(string) {
  return string.map(function(string) {
    return string.split(" ").map(function(word) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(" ");
  });
})(string);

console.log(titleCap);             // ['Hello Chintha', 'How Are You?', "I'm Fine, Thanks"]

//______________________________________________________________________________________________

// (3) Sum of all numbers in an array

// Anonymous function
// code:

var sum = function(a) {
  var result = 0
  for (i = 0;i <a.length; i++)
    {
      result = result + a[i]
    }
  return result 
}
var a = [1,2,3,4,5]
console.log(sum(a));                          // 15

// IIFE 
// code:

var a = [1,2,3,4,5]
var sum = (function(a){
  var result = 0
  for (i = 0;i <a.length; i++)
    {
      result = result + a[i]
    }
  return result 
})(a)
console.log(sum);                              // 15

//______________________________________________________________________________________________

// (4) Return all the prime numbers in an array

// Anonymous function
// code:

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = numbers.filter(function(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return number !== 1;
});

console.log(primeNumbers);                      // [2, 3, 5, 7]

// IIFE 
// code:

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var primeNumbers = (function(arr) {
  return arr.filter(function(number) {
    for (let i = 2; i < number; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return number !== 1;
  });
})(numbers);

console.log(primeNumbers);                      // [2, 3, 5, 7]

//______________________________________________________________________________________________

// (5) Return all the palindromes in an array

// Anonymous function
// code:

var words = ['racecar', 'level', 'hello', 'civic', 'world'];

var palindromes = words.filter(function(word) {
  const reversedWord = word.split('').reverse().join('');
  return word === reversedWord;
});

console.log(palindromes);                     // ["racecar", "level", "civic"]


// IIFE 
// code:

var words = ['racecar', 'level', 'hello', 'civic', 'world'];

var palindromes = (function(arr) {
  return arr.filter(function(word) {
    const reversedWord = word.split('').reverse().join('');
    return word === reversedWord;
  });
})(words);

console.log(palindromes);                      // ["racecar", "level", "civic"]

//______________________________________________________________________________________________

// (6) Return median of two sorted arrays of the same size

// Anonymous function
// code:

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [7, 8, 9, 10, 11];

var median = function(arr1, arr2) {
  var merged = arr1.concat(arr2).sort((a, b) => a - b);
  var middle = Math.floor(merged.length / 2);
  
  if (merged.length % 2 === 0) {
    return (merged[middle - 1] + merged[middle]) / 2;
  } else {
    return merged[middle];
  }
};

console.log(median(arr1, arr2));                                  // 6


// IIFE 
// code:

var arr1 = [1, 2, 3, 4, 5];
var arr2 = [7, 8, 9, 10, 11];

var median = (function(arr1, arr2) {
  var merged = arr1.concat(arr2).sort((a, b) => a - b);
  var middle = Math.floor(merged.length / 2);
  
  if (merged.length % 2 === 0) {
    return (merged[middle - 1] + merged[middle]) / 2;
  } else {
    return merged[middle];
  }
})(arr1, arr2);

console.log(median);                                              // 6   

//______________________________________________________________________________________________

// (7) Remove duplicates from an array

// Anonymous function
// code:

var arr = [1, 2, 2, 3, 3, 3, 4, 5, 5];

var unique = function(arr) {
  var result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.indexOf(arr[i]) === -1) {
      result.push(arr[i]);
    }
  }

  return result;
};

var result = unique(arr);

console.log(result);                               // [1, 2, 3, 4, 5]

// IIFE 
// code:

var arr = [1, 2, 2, 3, 3, 3, 4, 5, 5];

var result = (function(arr) {
  var unique = [];

  for (let i = 0; i < arr.length; i++) {
    if (unique.indexOf(arr[i]) === -1) {
      unique.push(arr[i]);
    }
  }

  return unique;
})(arr);

console.log(result);                                // [1, 2, 3, 4, 5]

//______________________________________________________________________________________________

// (8) Rotate an array by k times

// Anonymous function
// code:

var arr = [1, 2, 3, 4, 5];
var k = 2;

 result = (function(arr, k) {
  for (let i = 0; i < k; i++) {
    var temp = arr.shift();
    arr.push(temp);
  }

  return arr;
})(arr, k);

console.log(result);                        // [3, 4, 5, 1, 2]

// IIFE 
// code:

var arr = [1, 2, 3, 4, 5];
var k = 2;

var result = (function(arr, k) {
  for (let i = 0; i < k; i++) {
    var temp = arr.shift();
    arr.push(temp);
  }

  return arr;
})(arr, k);

console.log(result);                        // [3, 4, 5, 1, 2]

//______________________________________________________________________________________________
