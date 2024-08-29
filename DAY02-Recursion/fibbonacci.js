

function fib(n){

    // let last=1;
    // let first=0;
    if(n <=1){
        return 1
    }

    let last=fib(n-1)
    let first=fib(n-2)

    return last + first

}

console.log(fib(5))