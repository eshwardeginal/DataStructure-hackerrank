

function selectionSort(arr,n){

    for (let i = 0; i <= n-2; i++) {
        let mini=i

        for (let j = i; j <=n-1; j++) {
            
            if(arr[j] < arr[mini])mini=j
            
        }
        let temp=arr[mini]
        arr[mini]=arr[i];
        arr[i]=temp

        console.log(arr,i)

    }

}

let arr=[12,52,62,22,10]

selectionSort(arr,arr.length)