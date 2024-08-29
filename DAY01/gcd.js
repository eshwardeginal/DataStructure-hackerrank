// Example 1:
// Input:N1 = 9, N2 = 12
                
// Output:3
// Explanation:Factors of 9: 1, 3 and 9
// Factors of 12: 1, 2, 3, 4, 6, 12
// Common Factors: 1, 3 out of which 3 is the greatest hence it is the GCD.
// Example 2:
// Input:N1 = 20, N2 = 15
                
// Output: 5
// Explanation:Factors of 20: 1, 2, 4, 5
// Factors of 15: 1, 3, 5
// Common Factors: 1, 5 out of which 5 is the greatest hence it is the GCD.



//Approch 1
function getGCD(n1,n2){
    let gcd=1

    for (let index = 1; index < Math.min(n1,n2); index++) {
        
        if(n1%index ==0 && n2%index==0){
                gcd=index
        }
        
    }

    return Math.floor(gcd)
}

// Approch 2
function getGcdnew(n1,n2){
    if(n1>0 && n2>0){
        if(n1 >n2){
            n1=n1%n2
        }else{
            n2=n2%n1
        }
    }

    let ret=n1==0?n2:n1
    return ret
}

console.log(getGCD(9,12))//3
console.log(getGcdnew(20,15))//5