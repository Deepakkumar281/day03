//Print odd numbers in an array
// anonymous function
var res = function (arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            temp.push(arr[i]);
        }
    }
    return temp;
}
console.log(res([12, 13, 14, 15, 16, 17, 18]));

// IIFE
(function(arr) {
    var temp = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            temp.push(arr[i]);
        }
    }
    console.log(temp);
    return temp;
})([12, 13, 14, 15, 16, 17, 18]);

// Convert all the strings to title caps in a string array
// anonymous function
let array = ["hello", "hi", "day"];
var convertToTitleCase = function(arr) {
    var result = [];
    var convertToTitleCaseWord = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    for (let i = 0; i < arr.length; i++) {
        result.push(convertToTitleCaseWord(arr[i]));
    }
    return result;
};
console.log(convertToTitleCase(array));

// IIFE
(function(arr) {
    var result = [];
    var convertToTitleCase = function(string) {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    for (let i = 0; i < arr.length; i++) {
        result.push(convertToTitleCase(arr[i]));
    }
    console.log(result); 
    return result;
})(["hello", "hi", "day"]);

//Sum of all numbers in an array
// anonymous function
let array = [1, 2, 3, 4, 5];

var sum = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};

console.log(sum(array));
// IIFE
(function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    console.log(total); 
    return total;
})([1, 2, 3, 4, 5]);

//Return all the prime numbers in an array
// anonymous function
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let primeNumbers = function(arr) {
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    let primeArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeArray.push(arr[i]);
        }
    }
    return primeArray;
};

console.log(primeNumbers(array)); 
// IIFE
(function(arr) {
    function isPrime(num) {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }

    let primeArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeArray.push(arr[i]);
        }
    }
    console.log(primeArray); 
    return primeArray;
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Return all the palindromes in an array
// anonymous function

let array = ["radar", "level", "hello", "madam", "noon", "racecar"];

let palindromes = function(arr) {
    function isPalindrome(str) {
        let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    let palindromeArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromeArray.push(arr[i]);
        }
    }
    return palindromeArray;
};

console.log(palindromes(array));
// IIFE
(function(arr) {
    function isPalindrome(str) {
        let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleanStr === cleanStr.split('').reverse().join('');
    }

    let palindromeArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromeArray.push(arr[i]);
        }
    }
    console.log(palindromeArray); 
    return palindromeArray;
})(["radar", "level", "hello", "madam", "noon", "racecar"]);

//Return median of two sorted arrays of the same size.
// anonymous function
let array1 = [1, 3, 5, 7, 9];
let array2 = [2, 4, 6, 8, 10];

var median = function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = Math.floor(mergedArray.length / 2);
    
    if (mergedArray.length % 2 === 0) {
        return (mergedArray[mid - 1] + mergedArray[mid]) / 2;
    } else {
        return mergedArray[mid];
    }
};

console.log(median(array1, array2)); 
// IIFE
(function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    let mid = Math.floor(mergedArray.length / 2);
    
    if (mergedArray.length % 2 === 0) {
        console.log((mergedArray[mid - 1] + mergedArray[mid]) / 2);
    } else {
        console.log(mergedArray[mid]);
    }
})([1, 3, 5, 7, 9], [2, 4, 6, 8, 10]);

//Remove duplicates from an array
// anonymous function
let array = [1, 2, 3, 3, 4, 4, 5];

var uniqueArray = function(arr) {
    return arr.filter(function(value, index) {
        return arr.indexOf(value) === index;
    });
};

console.log(uniqueArray(array));
// IIFE
(function(arr) {
    let uniqueArray = arr.filter(function(value, index) {
        return arr.indexOf(value) === index;
    });
    console.log(uniqueArray);
})([1, 2, 3, 3, 4, 4, 5]);
//Rotate an array by k times
// anonymous function
let array = [1, 2, 3, 4, 5];
let k = 2;

var rotatedArray = function(arr, k) {
    for (let i = 0; i < k; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
};

console.log(rotatedArray(array.slice(), k));
// IIFE
let array = [1, 2, 3, 4, 5];
let k = 2;

let rotatedArray = (function(arr, k) {
    let rotated = [];
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let newIndex = (i + k) % n;
        rotated[newIndex] = arr[i];
    }
    return rotated;
})(array.slice(), k);

console.log(rotatedArray); 


//Do the below programs in arrow functions

//Print odd numbers in an array
const res = (arr) => {
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            temp.push(arr[i]);
        }
    }
    return temp;
};

console.log(res([12, 13, 14, 15, 16, 17, 18]));

//Convert all the strings to title caps in a string array

let array = ["hello", "hi", "day"];
const convertToTitleCase = (arr) => {
    let result = [];
    const convertToTitleCaseWord = string => {
        return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
    };

    for (let i = 0; i < arr.length; i++) {
        result.push(convertToTitleCaseWord(arr[i]));
    }
    return result;
};

console.log(convertToTitleCase(array)); 


//Sum of all numbers in an array

let array = [1, 2, 3, 4, 5];
const sum = (arr) => {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
};


console.log(sum(array)); 

//Return all the prime numbers in an array

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = arr => {
    const isPrime = num => {
        if (num <= 1) {
            return false;
        }
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };

    let primeArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            primeArray.push(arr[i]);
        }
    }
    return primeArray;
};

console.log(primeNumbers(array)); 
//Return all the palindromes in an array
let array = ["radar", "level", "hello", "madam", "noon", "racecar"];
const palindromes = (arr) => {
    const isPalindrome = str => {
        let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
        return cleanStr === cleanStr.split('').reverse().join('');
    };

    let palindromeArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (isPalindrome(arr[i])) {
            palindromeArray.push(arr[i]);
        }
    }
    return palindromeArray;
};


console.log(palindromes(array)); 
