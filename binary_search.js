
function binarySearch(arr, x, start = 0, end) {
    if (start > end) return false
    let mid = Math.floor((start + end)/2)
    if (arr[mid]===x) return true
    if(arr[mid] > x) {
        return binarySearch(arr, x, start, mid-1) 
    } else {
        return binarySearch(arr, x, mid+1, end)
    }
}

const arr = [1,2,3,4,5,6,7,8,9,10]
const found = binarySearch(arr,55, 0, arr.length -1 )
console.log(found)