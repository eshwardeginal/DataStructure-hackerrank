
function reverseArray(arr,start,end){
if(start<end){
    let temp=arr[start]
    arr[start]=arr[end]
    arr[end]=temp

    reverseArray(arr,start+1,end-1)

}
    
}

let arr=[1,2,3]
reverseArray(arr,0,arr.length-1)
console.log(arr)