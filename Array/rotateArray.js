

function rotatearraybyOneplace(array){

    let temp=array[0]
    for (let index = 1; index < array.length; index++) {
        array[index-1] = array[index];
        
    }
    array[array.length-1]=temp
}




function rotatearraybynplace(arr,n){
    const lent=5;
    if (lent == 0)
        return;
      n = n % lent;
      if (n > lent)
        return;
      let temp = [];
      for (let i = 0; i < n; i++) {
        temp.push(arr[i]);
      }
      for (let i = 0; i < lent - n; i++) {
        arr[i] = arr[i + n];
      }
      for (let i = lent - n; i < n; i++) {
        arr[i] = temp[i - lent + n];
      }
}

// let arr=[1,2,3,4,5]
// rotatearraybyOneplace(arr)
// console.log("---------replace by one : "+arr+"-----------")

let arr1=[1,2,3,4,5]
console.log(arr1,"before")
rotatearraybynplace(arr1,2)
console.log("---------replace by n -----------")
console.log(arr1)