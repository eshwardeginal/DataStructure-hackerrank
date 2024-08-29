// Print Name N times using Recursion

// Problem: Print your Name N times using recursion


function printntimesname(i,n){
    
    if(i<n){
        console.log("eshwara deginal",i)
        printntimesname(i+1,n)
    }else{
        return
    }
}

function print1ton(i,n){
    
    if(i<n){
        console.log(i)
        print1ton(i+1,n)
    }else{
        return
    }
}

function printnto1(i,n){
    
    if(i<1) return
    console.log(i)
    printnto1(i-1,n)
    
}

printntimesname(0,2)

print1ton(1,5)
printnto1(4,4)
