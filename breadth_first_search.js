const bstModule = require('./bst')


class extendedBst extends bstModule.BinarySearchTree {
    constructor() {
        super()
    }

    bfs() {

        let values = []
        let queue  = []
        let current = this.root

        queue.push(current)
        
        while(queue.length){
            let node = queue.shift()
            if(node != null){
                values.push(node.value)
                queue.push(node.left)
                queue.push(node.right)
            }
        }

        return values
    }

    inOrder(node = this.root) {
        if(node === null) return
        if(node.left !== null) this.inOrder(node.left)
        console.log(node.value)
        if(node.right !== null) this.inOrder(node.right)
    }

    preOrder(node = this.root) {
        if(node === null) return
        console.log(node.value)
        if(node.left !== null) this.preOrder(node.left)
        if(node.right !== null) this.preOrder(node.right)
    }

    postOrder(node = this.root) {
        if(node === null) return
        if(node.left != null) this.postOrder(node.left)
        if(node.right != null) this.postOrder(node.right)
        console.log(node.value)
    }

    bfsRecursive(node = this.root, values = [], queue = []) {

        if(node === null){
            return
        }

        values.push(node.value)
        queue.push(node.left)
        queue.push(node.right)

         while(queue.length > 0) {
             const node = queue.shift()
             this.bfsRecursive(node, values, queue)
         }

        return values
    }
}


const bst = new extendedBst()

// TREE SHAPE 



bst.insert(10)
// right side 
bst.insert(12)
bst.insert(11)
bst.insert(13)
// left side
bst.insert(7)
bst.insert(6)
bst.insert(8)

const values = bst.bfsRecursive()

bst.postOrder()