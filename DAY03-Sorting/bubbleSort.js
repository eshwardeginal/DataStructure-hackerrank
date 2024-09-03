

function bubbleSort(arr,n){

    for(let i=n-1;i>=0;i--){
        let isDidSwap=0
        for(let j=0;j<=i-1;j++){

            if(arr[j] >arr[j+1]){
                let temp=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
                isDidSwap=1
            }

        }

        if(isDidSwap == 0){
            console.log("arr is sorted")
            return
        }

        console.log(arr)
    }
}

let arr=[10,9,25,35,45]
bubbleSort(arr,arr.length)

let arr1=[1,2,3,4,9]
bubbleSort(arr1,arr1.length)