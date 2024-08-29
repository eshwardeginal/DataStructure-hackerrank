// Example 1:
// Input:N = 4554
// Output:Palindrome Number
// Explanation: The reverse of 4554 is 4554 and therefore it is palindrome number
// Example 2:
// Input:N = 7789
// Output: Not Palindrome
// Explanation: The reverse of number 7789 is 9877 and therefore it is not palindrome


function checkPolindrome(num){
    let newnum=0;
    let oldnum=num;
    while(num >0){
        let rem=num%10;
        newnum=(newnum*10)+rem;
        num=Math.floor(num/10);
    }

    if(newnum === oldnum){
        return "polindrome"
    }else{
        return "not polindrome"
    }
}

console.log(checkPolindrome(7789))//not polindrome

console.log(checkPolindrome(4554))//polindrome