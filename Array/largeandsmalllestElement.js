

function largestElement(arr){
    let largest=arr[0];
    for(let index=0;index<arr.length;index++ ){
        if(arr[index] >largest){
            largest=arr[index]
        }

    }

    return largest;

}

function smallestElement(arr){
    smallest=arr[0]

    for(let i=1;i<arr.length;i++){
        if(arr[i] <smallest){
            smallest=arr[i]
        }
    }

    return smallest;

}

let arr=[2,5,-1,8,1,3,4]

console.log(smallestElement(arr),"smallest")
console.log(largestElement(arr),"largest")