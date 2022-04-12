// 1.Define a function maxOfTwoNumbers 

function maxOfTwoNumbers(num1, num2){
    if(num1 > num2){
        return num1
    } else if (num1 == num2 ){
        return " they are equal"        
    } else {
        return num2
    }
}
console.log(maxOfTwoNumbers(5, 7))


// 2.Define a function maxOfThree 

function maxOfThree(num1, num2, num3){
    if(num1 >= num2  && num1 >= num3){
        return num1 
    } else if ( num2 >= num1 && num2 >= num3){
        return num2
    } else {
        return num3 
    }
}
console.log(maxOfThree(5,3,16))

// 3.Write a function isCharacterAVowel that takes a character 
// (i.e. a string of length 1) and returns true if it is a vowel,
//  false otherwise.

function isCharacterAVowel(vowel){
    let x = vowel.toUpperCase();
    if ( x=='A' || x=='E' || x=='I' || x=='O' || x=='U' || x=='Y'){
        return true
    } else {
        return false
    }
}
console.log(isCharacterAVowel('a'))

// 4.Define a function sumArray and a function multiplyArray that 
// sums and multiplies (respectively) all the numbers in an array of numbers. 
// For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function sumArray(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
    sum += array[i];
}
return sum
}

console.log(sumArray([1,2,3,4]))

function multiplyArray(array){
    let sum = 1;
    for (let i = 0; i < array.length; i++) {
    sum *= array[i];
}
return sum
}

console.log(multiplyArray([1,2,3,4]))

// 5.Write a function that return the number of arguments 
// passed to the function when called.

function totalArgs() {
    let total = 0;
    for(let i = 0; i < arguments.length; i++) {
      total ++;
    }
    return total;
  }
totalArgs(1, 123, 500, 115, 44, 88)

//6.Define a function reverseString that computes the reversal of a string. 
// For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(str){
    let newStr = "";
    for (let i = str.length-1; i>=0; i--) {
       newStr += str[i];        
    }
    return newStr
}
reverseString("Hello")



function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("This is reverse string");

// 7.Write a function findLongestWord that takes an array of words 
// and returns the length of the longest one.

function findLongestWord(str) {
    let strSplit = str.split(' ');
    let longestWord = 0;
    for(let i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord){
      longestWord = strSplit[i].length;
       }
    }
    return longestWord;
  }
  findLongestWord("I need a cup of coffee every morning");

// 8. Write a function filterLongWords that takes an array of words 
// and a number i and returns the array of words that are longer 
// than i characters long.

function filterLongWords (array, num){
    let words = array
    let result = words.filter(word => word.length > num);
    return result;
}
console.log(filterLongWords(["coffee", "sugar","pusheen","blackjack"], 6))

// Bonus 1. Add a method reverseString (from question 6) to the object String 
// so that it is possible to call: "Per Scholas".reverseString().

const obj = {
    name: 'Per Scholas',
    reverseString() {
        return str.split("").reverse().join("");
    }
}
console.log(obj.name.reverseString())