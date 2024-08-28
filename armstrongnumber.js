
// Problem Statement: Given an integer N, return true it is an Armstrong number otherwise return false.

// An Amrstrong number is a number that is equal to the sum of its own digits each raised to the power of the number of digits.
// Example 1:
// Input:N = 153
// Output:True
// Explanation: 13+53+33 = 1 + 125 + 27 = 153
// Example 2:
// Input:N = 371
// Output: True
// Explanation: 33+53+13 = 27 + 343 + 1 = 371

function getarmnumber(num){
    let len=String(num).length;
    let sum=0;
    let oldnum=num
    while(num >0){
        let rem=num%10;
        sum+=Math.pow(rem,len)
        num=Math.floor(num/10)


    }
    return sum === oldnum ?  true:false



}

console.log(getarmnumber(153))//true
console.log(getarmnumber(456))//false