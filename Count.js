//count no of digits
// Example 1:
// Input:N = 12345
// Output:5
// Explanation:  The number 12345 has 5 digits.
// Example 2:
// Input:N = 7789
// Output: 4
// Explanation: The number 7789 has 4 digits.

function CountDigits(number){
    let count=0;
    let num=number
    while(num >0){
        num = Math.floor(num / 10);;
        count+=1;
        
    }
    return count
}

//Approch-2 using logrithmic

function CountDigitsUsingLog(number){

    let count =Math.floor(Math.log10(number)+1)
    return count
}

console.log("count is first approch : "+ CountDigits(1234))//4

console.log("count is second approch : "+ CountDigitsUsingLog(1234123))//7
