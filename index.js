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
arrayAdder = (array, index) => {


	// let lastLetter = array.pop()
	// return arrayAdder(array)
}

arrayAdder([1,2,3,4,5])

// 2. Write a recursive function to find the largest integer in an array.



// 3. Write out a function to see if an array includes a given element.
