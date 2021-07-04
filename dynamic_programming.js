

function robMaxMoney(houses) {

    let maxI = 0;
    for( let i = 0; i < houses.length; i++) {
        if(houses[i] > maxI) maxI = houses[i]
    }

    if(houses.length <= 3) return houses[maxI]

    let leftArray  = houses.slice(0, maxI)
    let rightArray = houses.slice(maxI)

    let leftSide = []
    for(let x = 2; x <= leftArray.length; x = x+2) {
        if(leftArray[x+1])
    }

    // max ,2 , 4 , 5

    for(let y = 1; y <= rightArray.length; y++) {

    }

}

console.log(robMaxMoney([1,1,5,10]))

// [1,1,5,10]
// [1,11] [20,5] = 21 
// [1,11] [20,5] = 16
// [1,11] [6] = 7 =  
// [11] [5] = 16
// [1] [20] = 21

// [1,10,20,40,100] =  100 + 20 + 1 = 121

// [100] [40,20] [10,1] = [120] [10,1] = 121 

// [20, 15, 20, 1, 15] = 