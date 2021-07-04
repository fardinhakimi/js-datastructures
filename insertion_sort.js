function insertionSort(arr) {

    for(i = 1; i <= arr.length; i++) {
        let j = i
        while(j >= 0) {
            if(arr[j] > arr[j-1]) {
                break
            }
            if(arr[j] < arr[j-1]) {
                let temp = arr[j]
                arr[j] = arr[j-1]
                arr[j-1] = temp
            }
            j = j -1
        }
    }

    return arr
}

console.log(insertionSort([10,0,3,7,-1,4,2,5,77,-99]))