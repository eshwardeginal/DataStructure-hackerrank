

function isArraySorted(array){

    for (let index = 1; index < array.length; index++) {
        if(array[index] >= array[index-1]){

        }else{
            return false
        }

        
    }
    return true
}

let arr=[2,5,-1,8,1,3,4]

let arrFlag=isArraySorted(arr) ?"sorted":"not sorted"

console.log(arrFlag)

let arr1=[1,2,3,4,5]

let arrFlag1=isArraySorted(arr1) ?"sorted":"not sorted"

console.log(arrFlag1)