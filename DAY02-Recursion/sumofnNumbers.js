// Problem statement: Given a number ‘N’, find out the sum of the first N natural numbers.

// Examples:

// Example 1:
// Input: N=5
// Output: 15
// Explanation: 1+2+3+4+5=15

// Example 2:
// Input: N=6
// Output: 21
// Explanation: 1+2+3+4+5+6=15


function sumOfNumbers(n){
    
        if(n == 0)return 0;
        return n+sumOfNumbers(n-1)
   
    
}

console.log(sumOfNumbers(3))

