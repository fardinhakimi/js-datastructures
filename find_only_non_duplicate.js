
arr =  [3,3,4,4,5]


function findNoneDuplicate(nums) {
    if(nums.length === 1){
        return nums[0]
    }
    for(i = 0; i < nums.length; i = i +2) {
        if(nums[i+1] === null){
            return nums[i]
        }
        if(nums[i] !== nums[i+1]) {
            return nums[i]
        }
    }
}

console.log(findNoneDuplicate(arr))