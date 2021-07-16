// a function to list each character in a string

// The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

function printString (str) {
	console.log(str[0]);
    if (str.length > 1) {
        let mySubString = str.substring(1, str.length);
        printString(mySubString);
    } else {
        return true;
    }
};

// printString("pizza");
// printString("spy");
// printString("asdfasegbsfghwera")

// 1. Write out a recursive function to reverse a string.

function reverseString (str) {
	if(str.length < 2) {
		return str;
	} else {
		return reverseString(str.substring(1)) + str[0]
	}
}
// 1st time through: ("izza" + "p")
// 2nd time through: ("zza" + "ip")
// 3rd time through: ("za" + "zip")
// 4th time through: ("a" + "zzip")
// reverseString("pizza");

// 2. Write out a recursive function to see if a word is a palindrome.

// isPalindrome = (str) => {
// 	reverseString = (str) => {
// 		if(str.length < 2) {
// 			return str;
// 		} else {
// 			return reverseString(str.substring(1)) + str[0]
// 		}
// 	}
// 	return reverseString(str) === str ? true : false
// }

function isPalindrome (str) {
	let len = str.length;

	if (len < 2) {
	  return true;
	} else if (str[0] === str[len - 1]) {
	  return isPalindrome(str.substring(1, len - 1));
	} else {
	  return false;
	}
  }
// if str[first item] === str[last item], then return the str except for the first and last items. repeat this until the str is 1 in length

// isPalindrome("pizza")
isPalindrome("racecar")

// 1. Given an array and an index, write a recursive function to add up the elements of an array.

let array = [1,2,3,6,7,4,5]
function addUpTo (array, index) {
	return index ? array[index] + addUpTo(array, --index) : array[index];
}
addUpTo(array, 4)

// 2. Write a recursive function to find the largest integer in an array.

function maxOf (array) {
	if(array.length === 1) {
		return array[0]
	} else {
		return Math.max(array.pop(), maxOf(array))
	}
}
maxOf(array)

// 3. Write out a function to see if an array includes a given element.

let newArray = [1,2,3,6,7,4,5]

function includesNumber (array, element) {
	if(!array.length) {
		return false;
	} else if (array[0] === element){
		return true;
	} else {
		return includesNumber(array.slice(1), element)
	}
}

// if the array length is 0 (false), return false
// if the first element in the array === element, return true
// else slice the first element from the array, and return the function with the mutated array

includesNumber(newArray, 4) //?