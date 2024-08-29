

// Problem Statement: "Given a string, check if the string is palindrome or not."  A string is said to be palindrome if the reverse of the string is the same as the string.

// Examples:

// Example 1:
// Input: Str =  “ABCDCBA”
// Output: Palindrome
// Explanation: String when reversed is the same as string.

// Example 2:
// Input: Str = “TAKE U FORWARD”
// Output: Not Palindrome
// Explanation: String when reversed is not the same as string.

function checkstringpolindrome(strarr,i){
   

    if(i>=strarr.length/2 ) return true;

    if(strarr[i] !==strarr[strarr.length-1-i]) return false;

    return checkstringpolindrome(str,i+1)
    
}

let str="madam"

console.log(checkstringpolindrome(str,0))

let str1="hello"

console.log(checkstringpolindrome(str1,0))