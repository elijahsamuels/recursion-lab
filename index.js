// a function to list each character in a string

// The substring() method returns the part of the string between the start and end indexes, or to the end of the string.

printString = (myString) => {
    // console.log(myString[0]);
    if (myString.length > 1) {
        let mySubString = myString.substring(1, myString.length);
        printString(mySubString);
    } else {
        return true;
    }
};

printString("pizza");
//   printString("asdfasegbsfghwera")


// 1. Write out a recursive function to reverse a string.

reverseString = (myString) => {
	if(myString.length < 2) {
		return myString;
	} else {
		return reverseString(myString.substring(1)) + myString[0]
	}
}

reverseString("pizza");

// 2. Write out a recursive function to see if a word is a palindrome.

isStringPalindrome = (myString) => {
	reverseString = (myString) => {
		if(myString.length < 2) {
			return myString;
		} else {
			return reverseString(myString.substring(1)) + myString[0]
		}
	}
	return reverseString(myString) === myString ? true : false
}

isStringPalindrome("pizza")
isStringPalindrome("racecar")

// 1. Given an array and an index, write a recursive function to add up the elements of an array.

let array = [1,2,3,6,7,4,5]
arrayAdder = (array, index) => {
	return index ? array[index] + arrayAdder(array, --index) : array[index];
}
arrayAdder(array, 4)

// 2. Write a recursive function to find the largest integer in an array.

findLargestNumber = (array) => {
	if(array.length === 1) {
		return array[0]
	} else {
		return Math.max(array.pop(), findLargestNumber(array))
	}
}
findLargestNumber(array)

// 3. Write out a function to see if an array includes a given element.

let newArray = [1,2,3,6,7,4,5]

isTheElementIncluded = (array, element) => {
	if(array.length === 0) {
		return false
	} else if (array[0] === element){
		return true
	} else {
		isTheElementIncluded(array.slice(1), element)
	}
}
isTheElementIncluded(newArray, 4) //?
