//Edabit Challenges Solutions
/*
//1. Concate first and last string in one string

const concateString = (firstName, lastName) => lastName.concat("," + firstName);
let props = concateString("Shashank", "Kumar");

//2. Square of number
const square = number => number * number;
props = square(7);

//3. Check for negativity of number
const checkNegative = number => {
  if (number < 0) {
    return "Number is negative";
  } else {
    return "Number is non-negative";
  }
};

props = checkNegative(0);

//4. return the remainder after dividing first number by second Number

const remainder = (dividend, divider) => dividend % divider;

props = remainder(9, 4);

//5. Return sum of two numbers

const totalSum = (num1, num2) => num1 + num2;

props = totalSum(89, 11);

//6. Return the next number of the integer passed

const nextNumber = num => num + 1;

props = nextNumber(-5);

//6. Compare string by sum of characters

const compareStrings = (str1, str2) => {
  if (str1.length == str2.length) {
    return true;
  } else {
    return false;
  }
};

props = compareStrings("As", "dfa");

//7. Last element of array

const lastElement = arr => arr[arr.length - 1];

props = lastElement([34, 76, 93, 19, 23, -45]);

//8. check number odd or even

const evenOdd = num => {
  if (num % 2 == 1) {
    return "odd";
  } else {
    return "even";
  }
};

props = evenOdd(-2);

//9. Return first and last element of array

const firstLastElement = arr => [arr[0], arr[arr.length - 1]];

props = firstLastElement([23, 45, 67, 81, 90]);

//10. find the index

const findIndex = (arr, str) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == str) {
      return i;
    }
  }
  return "not found";
};

props = findIndex(["Pineapple", "Orange", "Grape", "Apple"], "Pineapple");

//11. count Arguments

const countArgument = a => countArgument.length;

props = countArgument(5, 6);

//12. count the digit in numbers

const countDigit = num => num.toString().length;

props = countDigit(659784);

//13. Convert number to Month Name

const numberToMonth = num => {
  switch (num) {
    case 1:
      return "January";
      break;
    case 2:
      return "February";
      break;
    case 3:
      return "March";
      break;
    case 4:
      return "April";
      break;
    case 5:
      return "May";
      break;
    case 6:
      return "June";
      break;
    case 7:
      return "July";
      break;
    case 8:
      return "August";
      break;
    case 9:
      return "September";
      break;
    case 10:
      return "October";
      break;
    case 11:
      return "November";
      break;
    case 12:
      return "December";
      break;
    default:
      return "Not a month name";
  }
};

props = numberToMonth(11);

//14. Word count

const wordCount = str => {
  str = str.split(" ");
  let newStr = /[a-zA-z0-9]/;
  let count = 0;
  str.forEach(function(el) {
    if (newStr.test(el)) {
      count++;
    }
  });
  return count;
};
props = wordCount("Make it happen,   Sha");

// 15. return student names

const studentNames = arr => {
  return arr.map(function(el) {
    return el.name;
  });
};

props = studentNames([
  { name: "Shashank" },
  { name: "Kumar" },
  { name: "Sharma" }
]);

//16. Smallest element in array

const smallestElement = arr => {
  let small = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (small > arr[i]) {
      small = arr[i];
    }
  }
  return small;
};

props = smallestElement([34, 16, 23, 54, 98]);

//17. Flip the boolean

const flipBoolean = args => (args ? "false" : "true");

props = flipBoolean(false);

//18. Largest number in array

const largestElement = arr => {
  let large = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (large < arr[i]) {
      large = arr[i];
    }
  }
  return large;
};

props = largestElement([34, 16, 23, 54, 98]);

//19. Number to string of dashes

const stringDashes = num => {
  let arr = "";
  for (let i = 0; i < num; i++) {
    arr += "-";
  }
  return arr;
};

props = stringDashes(7);

//20. Shuffle the names

const shuffleNames = name => {
  name = name.split(" ");
  return name[1] + " " + name[0];
};

props = shuffleNames("Shashank Kumar");

//22. Multiply by length

const multiplyByLength = arr => {
  return arr.map(function(el) {
    return el * arr.length;
  });
};

props = multiplyByLength([2, 5, 9, 10]);

//23. repeat item multiple times

const repeatItem = (item, repeat) => {
  let arr = [];
  for (let i = 0; i < repeat; i++) {
    arr.push(item);
  }
  return arr;
};

props = repeatItem(5, 7);

//24. Reverse string

const reverseString = str =>
  str
    .split("")
    .reverse()
    .join("");

props = reverseString("Shashank kumar");

//25. String in Alphabetical order

const alphabeticalOrder = str => str.split("").sort();

props = alphabeticalOrder("shashank");

//26. 4 letter strings only

const stringLetters = arr => {
  let fourLetter = [];
  arr.forEach(function(el) {
    if (el.length == 4) {
      fourLetter.push(el);
    }
  });
  return fourLetter;
};

props = stringLetters([
  "Shas",
  "Kumar",
  "Shashank",
  "Programming",
  "Soft",
  "Cat"
]);

//27. second String matchs first string ending

const stringMatch = (str1, str2) => {
  let len = str1.length - str2.length;
  str1 = str1.slice(len, str1.length);
  if (str1 == str2) {
    return true;
  } else {
    return false;
  }
};

props = stringMatch("Shashank", "shanks");

//28. eliminate odd numbers from array

const eliminateOdd = arr => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2) {
    } else {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

props = eliminateOdd([23, 14, 18, 33, 89, 26]);

//29. add upto numbers

const addUp = num => {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
};

props = addUp(10);

//30. find out strings from array

const stringsFromArray = arr => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "string") {
      newArray.push(arr[i]);
    }
  }
  return newArray;
};

props = stringsFromArray([2, 3, true, "shas"]);

//31. count the characters in strings

const countChars = str => {
  const obj = {};
  const ch = /[a-zA-Z0-9]/;
  for (let i = 0; i < str.length; i++) {
    if (ch.test(str[i])) {
      let char = str[i].toLowerCase();
      if (obj[char] > 0) {
        obj[char]++;
      } else {
        obj[char] = 1;
      }
    }
  }
  return obj;
};

props = countChars("Shashank");

//32. repeat character Concate

const repeatChars = str => {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    arr.push(str[i]);
    arr.push(str[i]);
  }
  arr = arr.join("");
  return arr;
};

props = repeatChars("Shashank");

//33. Absolute sum

const sumArray = arr => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += Math.abs(arr[i]);
  }
  return sum;
};

props = sumArray([2, 3, -5, 7]);

//34. Count vowels

const countVowels = str => {
  let count = 0;
  const vowels = /[aeiou]/;
  for (let i = 0; i < str.length; i++) {
    if (vowels.test(str[i])) {
      count++;
    }
  }
  return count;
};

props = countVowels("Shashankeu");

//35. Pi to N decimal places

const piValue = num => Math.PI.toFixed(num);

props = piValue(4);

//36. Factorial

const factorial = num => {
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    factorial *= i;
  }
  return factorial;
};

props = factorial(5);

//37. check number & string in array

const stretch = (num, str, arr) => {
  let x = 0,
    y = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == num) {
      x++;
    } else if (arr[i] == str) {
      y++;
    }
  }
  if (y > 0) {
    y++;
  }
  return [x, y];
};

props = stretch(10, "Shashank", [10, 20, "Shashank", 10, 10]);

//38. Remove vowel from strings

const removeVowels = str => {
  let ch = /[aeiou]/g;
  return str.replace(ch, "");
};
props = removeVowels("Shashank Kumar");

//39. Array of Array

const arrayOfArray = arr => {
  let largest = [];
  for (let i = 0; i < arr.length; i++) {
    let currentArray = arr[i];
    let big = currentArray[0];

    for (let j = 0; j < currentArray.length; j++) {
      if (big < currentArray[j]) {
        big = currentArray[j];
      }
    }
    largest.push(big);
  }
  return largest;
};

props = arrayOfArray([
  [10, 20, 30, 15, 55],
  [48, 34, 89, 26],
  [21, 8, 3, 10, 16]
]);

// 40. Phone number formatting

const phoneNumber = arr => {
  arr.splice(0, 0, "(");
  arr.splice(4, 0, ")");
  arr.splice(5, 0, " ");
  arr.splice(9, 0, "-");
  return arr.join("");
};
props = phoneNumber([9, 8, 4, 5, 8, 5, 4, 8, 4, 6]);

//41. Calculate mean

const calculateMean = arr => {
  let mean = 0;
  for (let i = 0; i < arr.length; i++) {
    mean += arr[i];
  }
  return mean / arr.length;
};

props = calculateMean([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//42. Sort Array in Ascending order

const sortArray = arr => arr.sort();

props = sortArray([20, 30, 45, 15, 26, 31]);

// 43. Return lowest and highest numbers from strings

const lhString = str => {
  let lh = [];
  str = str.split(" ");
  str = str.sort();
  lh.push(str[str.length - 1], str[0]);
  return lh.join(" ");
};
props = lhString("6 2 4 7 8 5 2 9");

//44. sort string by its length

//44. Symetrical Numbers

const checkSymmetry = num => {
  str = num.toString();
  str = str
    .split("")
    .reverse()
    .join("");
  if (num == str) {
    return true;
  } else {
    return false;
  }
};

props = checkSymmetry(443544);

//45. Remove duplicate from array

const removeDuplicate = arr => {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    let state = 0;
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        state = 1;
      }
    }
  }
  return newArray;
};

props = removeDuplicate([4, 3, 8, 2, 9, 4, 5]);

//46. Missing Numbers

const missingNumber = arr => {
  let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let index;
  for (let i = 0; i < arr.length; i++) {
    index = num.indexOf(arr[i]);
    num.splice(index, 1);
  }
  return num;
};

props = missingNumber([5, 6, 7, 1, 3, 4, 8, 9, 0]);

//47. Check 'x' or 'o'

const checkXO = str => {
  let xCount = 0;
  let oCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "x") {
      xCount++;
    } else if (str[i] == "o") {
      oCount++;
    }
  }
  if (xCount == oCount) {
    return true;
  } else {
    return false;
  }
};

props = checkXO("xooxxoox");

//48. Equality of 3 values

const checkEquality = (a, b, c) => {
  if ((a == b) == c) {
    return "all 3 equal";
  } else if (a == b || b == c || a == c) {
    return "2 equals";
  } else {
    return "0 equal";
  }
};

props = checkEquality(1, 1, 1);

//49. H4ck3r Sp34k

const hackerSpeak = str => {
  str = str.replace(/a/g, 4);
  str = str.replace(/e/g, 3);
  str = str.replace(/o/g, 0);
  str = str.replace(/i/g, 1);
  str = str.replace(/s/g, 5);
  str = str.replace(/z/g, 2);
  str = str.replace(/g/g, 6);
  str = str.replace(/t/g, 7);
  str = str.replace(/x/g, 8);
  str = str.replace(/p/g, 9);
  return str;
};

props = hackerSpeak(
  "Hacker Speak Programming is fun Javascript is cool language"
);

//50. Capitalize the names

const capitalise = arr => {
  let newArray = [];
  for (let i = 0; i < arr.length; i++) {
    newArray.push(
      arr[i].charAt(0).toUpperCase() + arr[i].slice(1).toLowerCase()
    );
  }
  return newArray;
};

props = capitalise(["shashanK", "shIvaNi", "shipra", "shakya"]);

//51. filter method ES6

const person = [
  { id: 1, name: "shashank" },
  { id: 2, name: "Kumar" },
  { id: 3, name: "sharma" }
];

const people = person.filter(p => p.id != 2);

//console.log(people);

//50. Return middle character of string

const middleChar = str => {
  const len = str.length;
  let strArr = [];

  if (len % 2) {
    return str.charAt(len / 2);
  } else {
    strArr.push(str.charAt(len / 2 - 1));
    strArr.push(str.charAt(len / 2));
    strArr = strArr.join("");
    return strArr;
  }
};

props = middleChar("Shashank");

//51 Alternatings caps

const alternateCaps = str => {
  str = str.split("").map((el, i) => {
    if (i % 2) {
      return el;
    }
    return el.toUpperCase();
  });
  return str.join("");
};

props = alternateCaps("shashank");

//52 Capitalize first letter of word

const flCapitalize = str => {
  str = str.split(" ").map(el => {
    const first = el.charAt(0).toUpperCase();
    const rest = el.slice(1);
    return first.concat(rest);
  });
  return str.join(" ");
};

props = flCapitalize("shashank is very good boy.");

//53. Remove special character from string

const specialChar = str => {
  let ch = /[!@#$%^&*-]/g;
  return str.replace(ch, "");
};

props = specialChar("Sha*shank#mk akumar! ah^6hsa");

//54. Return sum of smallest number

const smallestSum = arr => {
  arr = arr.sort((a, b) => {
    return a - b;
  });

  sum = arr[0] + arr[1];
  return sum;
};

props = smallestSum([6, 11, 45, 3, 35, -3]);

//55.Check Duplicate and organize

const dupSort = arr => {
  let obj = {};
  let newArr = [];

  arr.forEach(el => {
    if (obj[el] > 0) {
      obj[el]++;
    } else {
      newArr.push(el);
      obj[el] = 1;
    }
  });
  return newArr.sort((a, b) => {
    return a - b;
  });
};

props = dupSort([1, 4, 4, 4, 6, 3, 2, -3]);

//56. reverse string array

const revString = str => {
  let newArr = str.split(" ").map(el => {
    if (el.length >= 5) {
      return el
        .split("")
        .reverse()
        .join("");
    } else {
      return el;
    }
  });
  return newArr.join(" ");
};

props = revString("Shashank is a good boy.");

//57. email verification

const emailVerification = str => {
  let f;
  let s;
  let check = false;
  let char;
  let obj = {};
  let countF = 0;
  let countS = 0;
  let t = true;

  str.split("").forEach((el, index) => {
    char = el;
    if (el == "@") {
      f = index;
      countF++;
      obj[char] = countF;
      if (obj[char] > 1) {
        t = false;
      }
    }
    if (el == ".") {
      countS++;
      if (countS < 2) {
        s = index;
      }
    }
    if (s > f + 1 && f > 0 && t == true) {
      check = true;
    }
  });
  return check;
};

props = emailVerification("hello@edabit.com");

//58. maskify

const maskify = str => {
  const len = str.length;
  let arr = [];

  if (len > 4) {
    str = str.slice(-4);
  }
  for (let i = 0; i < len - 4; i++) {
    arr.push("#");
  }
  arr.push(str);
  return arr.join("");
};

props = maskify("0018921450851234");

//59. ATM Pincode

const atmPinVerify = str => {
  const ch = /[a-zA-Z!@#$%^&*]/;

  if (ch.test(str)) {
    return false;
  }

  if (str.length === 4 || str.length === 6) {
    return true;
  } else {
    return false;
  }
};

props = atmPinVerify("1234");

//60. ASCII CHAR

const ascConv = str => {
  let vow = /[aeiou]/;
  let newArr = [];
  let ch = /[a-z]/;
  str = str.toLowerCase().split("");

  str.forEach(el => {
    if (ch.test(el)) {
      el = el.charCodeAt(0);
      if (el === 122) {
        el -= 26;
      }
      if (vow.test(String.fromCharCode(el + 1))) {
        newArr.push(String.fromCharCode(el - 31));
      } else {
        newArr.push(String.fromCharCode(el + 1));
      }
    } else {
      newArr.push(el);
    }
  });

  return newArr.join("");
};

props = ascConv("zShashank is 93");

//61. Check if letters surrounded by +

const checkPattern = str => {
  let check = false;
  str = str.split("");
  let ch = /[a-z]/;
  for (let i = 0; i < str.length; i++) {
    if (ch.test(str[i])) {
      if (str[i - 1] == "+" && str[i + 1] == "+") {
        check = true;
      } else {
        check = false;
        break;
      }
    }
  }
  return check;
};

props = checkPattern("+==+a+");

//62. Hackerrank problem

const p = (s, keypad) => {
  let matrix = keypad.split("");
  let mat = [...matrix];
  let r1 = mat.splice(0, 3);
  let r2 = mat.splice(0, 3);
  let r3 = mat.splice(0, 3);
  matrix = [r1, r2, r3];
  s = s.split("");
  let index = [];
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] == matrix[0][0]) {
      index.push(1);
    }
    if (s[i] == matrix[0][1]) {
      index.push(2);
    }
    if (s[i] == matrix[0][2]) {
      index.push(3);
    }
    if (s[i] == matrix[1][0]) {
      index.push(4);
    }
    if (s[i] == matrix[1][1]) {
      index.push(5);
    }
    if (s[i] == matrix[1][2]) {
      index.push(6);
    }
    if (s[i] == matrix[2][0]) {
      index.push(7);
    }
    if (s[i] == matrix[2][1]) {
      index.push(8);
    }
    if (s[i] == matrix[2][2]) {
      index.push(9);
    }
  }

  for (let i = 0; i < index.length - 1; i++) {
    if (index[i] === 1) {
      if (index[i + 1] === 1) {
        sum += 0;
      } else if (
        index[i + 1] === 2 ||
        index[i + 1] === 4 ||
        index[i + 1] === 5
      ) {
        sum += 1;
      } else {
        sum += 2;
      }
    } else if (index[i] === 3) {
      if (index[i + 1] === 3) {
        sum += 0;
      } else if (
        index[i + 1] === 2 ||
        index[i + 1] === 6 ||
        index[i + 1] === 5
      ) {
        sum += 1;
      } else {
        sum += 2;
      }
    } else if (index[i] === 7) {
      if (index[i + 1] === 7) {
        sum += 0;
      } else if (
        index[i + 1] === 4 ||
        index[i + 1] === 8 ||
        index[i + 1] === 5
      ) {
        sum += 1;
      } else {
        sum += 2;
      }
    } else if (index[i] === 9) {
      if (index[i + 1] === 9) {
        sum += 0;
      } else if (
        index[i + 1] === 6 ||
        index[i + 1] === 8 ||
        index[i + 1] === 5
      ) {
        sum += 1;
      } else {
        sum += 2;
      }
    } else if (index[i] === 2) {
      if (index[i + 1] === 2) {
        sum += 0;
      } else if (
        index[i + 1] === 1 ||
        index[i + 1] === 3 ||
        index[i + 1] === 5 ||
        index[i + 1] === 6 ||
        index[i + 1] === 4
      ) {
        sum += 1;
      } else {
        sum += 2;
      }
    } else if (index[i] === 4) {
      if (index[i + 1] === 4) {
        sum += 0;
      } else if (
        index[i + 1] === 1 ||
        index[i + 1] === 2 ||
        index[i + 1] === 5 ||
        index[i + 1] === 8 ||
        index[i + 1] === 7
      ) {
        sum += 1;
      } else {
        sum += 2;
      }
    } else if (index[i] === 6) {
      if (index[i + 1] === 6) {
        sum += 0;
      } else if (
        index[i + 1] === 3 ||
        index[i + 1] === 2 ||
        index[i + 1] === 5 ||
        index[i + 1] === 8 ||
        index[i + 1] === 9
      ) {
        sum += 1;
      } else {
        sum += 2;
      }
    } else if (index[i] === 8) {
      if (index[i + 1] === 8) {
        sum += 0;
      } else if (
        index[i + 1] === 4 ||
        index[i + 1] === 5 ||
        index[i + 1] === 6 ||
        index[i + 1] === 7 ||
        index[i + 1] === 9
      ) {
        sum += 1;
      } else {
        sum += 2;
      }
    } else if (index[i] === 5) {
      if (index[i + 1] === 5) {
        sum += 0;
      } else {
        sum += 1;
      }
    }
  }
  console.log(sum);
};

p("423692", "923857614");



//E1

const sumMultiple = () => {
  let sum = 0;
  for (let i = 1; i < 1000; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
};

props = sumMultiple();

//E2

const evenFibonacci = num => {
  let arr = [1, 2];
  let sum = 0;
  let total = 0;

  for (let i = 1; sum < num; i++) {
    sum = arr[i] + arr[i - 1];
    if (sum < num) {
      arr.push(sum);
    }
  }

  arr.forEach(el => {
    if (el % 2 === 0) {
      total += el;
    }
  });
  return total;
};

props = evenFibonacci(4000000);



//E3

const largestPrimeFactor = num => {
  let max = 0;
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      max = i;
    }
  }
  return max;
};

props = largestPrimeFactor(6008);

//E4

const digitPalindrome = () => {
  let mul, revmul;
  let arr = [];
  for (let i = 999; i > 100; i--) {
    for (let j = 999; j > 100; j--) {
      mul = i * j;
      mul = mul.toString();
      revmul = mul
        .split("")
        .reverse()
        .join("");
      if (revmul === mul) {
        arr.push(mul);
      }
    }
  }
  arr.sort((a, b) => {
    return b - a;
  });
  return arr[0];
};

props = digitPalindrome();

//E4

const smallestMultiple = () => {
  let num = 1;
  while (true) {
    let arr = [];
    for (let i = 1; i <= 20; i++) {
      if (num % i === 0) {
        arr.push(i);
      }
    }
    if (arr.length === 20) {
      return num;
    }
    num++;
  }
};

props = smallestMultiple();

//E5

const primeNum = () => {
  let num = 1;
  let arrPrime = [];

  while (arrPrime.length <= 10) {
    let arr = [];
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        arr.push(i);
      }
    }
    if (arr.length === 2) {
      arrPrime.push(num);
    }
    num++;
    if (arrPrime.length === 10) {
      return arrPrime[10];
    }
  }
};

props = primeNum();

*/

//First recurring chars

const firstRecurringChar = str => {
  const arr = str.split('');
  let ch;
  let chars;
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    ch = arr[i];
    if (obj[ch] > 0) {
      chars = ch;
      break;
    } else {
      obj[ch] = 1;
    }
  }

  return chars;
};

//props = firstRecurringChar('shashank');

console.log(props);
