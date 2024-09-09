

function secondLargest(array){

    let largest=array[0];
    let seclarg=-1;
    for (let index = 0; index < array.length; index++) {
        if(array[index] > largest)
        {
            seclarg=largest;
            largest=array[index];
        }else if(array[index] <largest && array[index] >seclarg){
            seclarg=array[index]

        }
        
    }

    return {largest,seclarg}
}

let arr=[2,5,-1,8,1,3,4]
console.log(secondLargest(arr))