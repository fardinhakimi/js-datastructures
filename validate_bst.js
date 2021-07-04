const bstModule = require('./bst')

class extendedBst extends bstModule.BinarySearchTree {
    constructor() {
        super()
    }

    inOrder(node = this.root, list = []) {
        if(node === null) return
        if(node.left !== null) this.inOrder(node.left, list)
        list.push(node)
        if(node.right !== null) this.inOrder(node.right, list)
        return list
    }

    /**
     * 
     * @returns {bool}
     */
    isValidBst() {
        const treeNodes = this.inOrder()
        for(let i = 0; i < treeNodes.length; i ++) {
            if(treeNodes[i] > treeNodes[i+1]) {
                return false
            }
        }
        return true
    }
}

const bst = new extendedBst()

// TREE SHAPE 
bst.insert(10) // ROOT
bst.insert(9) 
bst.insert(7)
bst.insert(3)
bst.insert(1)
bst.insert(20)
bst.insert(40)
bst.insert(3)
bst.inOrder(8)
bst.insert(11)
bst.insert(null)

console.log(bst.isValidBst())

