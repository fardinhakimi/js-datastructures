
class Node {
    constructor(value){
        this.left = null
        this.right = null
        this.value = value
    }
}

class BinarySearchTree {
  constructor(){
    this.root = null
  }
    insert(val, node = this.root){
        if(this.root === null) {
            this.root = new Node(val)
        } else {
            if(val > node.value) {
                if(node.right === null){
                    node.right = new Node(val)
                } else {
                    return this.insert(val, node.right)
                }
            } else if(val < node.value) {
                if(node.left === null) {
                    node.left = new Node(val)
                } else {
                    return this.insert(val, node.left)
                }
            }
        }
    }
}

function traverse(node, arr= []) {
    arr.push(node.value)
    if(node.left) {
        traverse(node.left, arr)
    }
    if(node.right) {
        traverse(node.right, arr)
    }
    return arr
}

const tree1 = new BinarySearchTree()
tree1.insert(0)
tree1.insert(-10)
tree1.insert(10)

const tree2 = new BinarySearchTree()
tree2.insert(5)
tree2.insert(1)
tree2.insert(7)
tree2.insert(0)
tree2.insert(2)

arr1 = traverse(tree1.root)
arr2 = traverse(tree2.root)


const mergedArr = [...arr1, ...arr2]

function selectionSort(arr) {
    for(i = 0; i < arr.length -1; i ++) {
        let imin = i
        for(j = (i+1); j < arr.length; j++){
            if(arr[j] < arr[imin]){
                imin = j
            }
        }
        if(imin != i){
            let temp  = arr[imin]
            arr[imin] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}

const sortedArr = selectionSort(mergedArr)
console.log(selectionSort(sortedArr))

