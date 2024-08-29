// Problem Statement: Given an integer N, check whether it is prime or not. A prime number is a number that is only divisible by 1 and itself and the total number of divisors is 2.
// Example 1:
// Input:N = 2
// Output:True
// Explanation: 2 is a prime number because it has two divisors: 1 and 2 (the number itself).
// Example 2:
// Input:N =10
// Output: False
// Explanation: 10 is not prime, it is a composite number because it has 4 divisors: 1, 2, 5 and 10.


function checkPrime(num){

    let count=0

    for (let index = count; index <=num; index++) {
        if(num % index ==0){
            count+=1
        }
        
    }

    return count==2?true:false
    

}

console.log(checkPrime(21))//false
console.log(checkPrime(5))//true
