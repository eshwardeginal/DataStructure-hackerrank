// Example 1:
// Input:N = 12345
// Output:54321
// Explanation: The reverse of 12345 is 54321.
// Example 2:
// Input:N = 7789
// Output: 9877
// Explanation: The reverse of number 7789 is 9877.


//Approch 1
function reversenumber(num){
    let newnum=0;
    while(num >0){
        let rem=num%10;
        //console.log(rem)
        newnum=(newnum*10)+rem;
        //console.log(newnum)
        num=Math.floor(num/10)
        //console.log(num)
        
    }
    return newnum;
}



console.log(reversenumber(1234))//4321
console.log(reversenumber(4900))//94