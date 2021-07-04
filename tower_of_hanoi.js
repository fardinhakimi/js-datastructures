

let source = [5,4,3,2,1]
let target = []
let spare  = []

/**
 * SOURCE   SPARE  TARGET
 */

function towerOfHanoi(n, source, target, spare) {
    if(n > 0) {
        towerOfHanoi(n-1, source, spare, target)
        target.push(source.pop())
        towerOfHanoi(n-1, spare, target, source)
    }
}


towerOfHanoi(5, source, target, spare)

console.log(source)
console.log(target)