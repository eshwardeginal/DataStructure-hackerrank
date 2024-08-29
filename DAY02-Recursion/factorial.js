

function factorialnumber(n){
    let fact=1
    if(n>=1){
        fact= n * factorialnumber(n-1)
    }else{
        return 1
    }
    return fact
}

console.log(factorialnumber(3))