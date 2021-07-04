function mergeSort(arr) {

    if(arr.length === 1) {
        return arr
    }

    const middle = Math.floor(arr.length / 2)
    const right  = arr.slice(0, middle)
    const left   = arr.slice(middle)

    return merge(
        mergeSort(right),
        mergeSort(left)
    )
}


function merge(right, left) {

    if(right.length === 0 && left.length === 0) {
        return []
    }

    let merged = []
    let leftI = 0
    let rightI = 0

    while(leftI < left.length && rightI < right.length) {

        if(right[rightI] < left[leftI]) {
            merged.push(right[rightI])
            rightI++
        } else {
            merged.push(left[leftI])
            leftI++
        }
    }

    return merged.concat(left.slice(leftI)).concat(right.slice(rightI))
}

const mergedArr = mergeSort([-11,5,400,0,2,10,0])

console.log(mergedArr)