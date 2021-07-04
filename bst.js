//import traverse from "./traverse";

class Node {
  constructor(value){
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
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

  removeLeafNode(parent, node) {
    if(parent.left === node){
      parent.left = null
    } else if(parent.right === node) {
      parent.right = null
    } else if(parent === node) {
      this.root = null
    }
  }

  // remove a node with 1 child
  bypassNode(parent, node) {
    if(parent.left === node) {
      if(node.right != null) {
        parent.left = node.right
      } else {
        parent.left = node.left
      }
    } else if(parent.right === node) {
      if(node.right != null) {
        parent.right = node.right
      } else {
        parent.right = node.left
      }
    } else if(parent === node && parent === this.root) {
      if(parent.right !== null) {
        this.root = parent.right
      } else if(parent.left !== null) {
        this.root = parent.left
      }
    }
  }

  removeNodeWithTwoChildren(parent, node) {
    if(node.right.left != null) {
      // FIND THE SMALLEST LEFT NODE
      let leftestNode = node.right
      let leftestNodeParent  = node.right

      while(leftestNode.left != null) {
        leftestNodeParent = leftestNode
        leftestNode = leftestNode.left
      }

      leftestNode.left = node.left 
      leftestNode.right = node.right

      // what node we are trying to delete here
      if(parent.left === node) {
        parent.left = leftestNode
      } else if(parent.right === node) {
        parent.right = leftestNode
      } else if(this.root === parent && parent === node) {
        this.root = leftestNode
      }

      leftestNodeParent.left = null

    } else if(node.right.left === null) {

      if(parent === node && parent === this.root) {
        node.right.left = this.root.left
        this.root = node.right
      } else {
        const successor = node.right 
        successor.left = node.left
        if(parent.left === node) {
          parent.left = successor
        } else if(parent.right == node) {
          parent.right = successor
        }
      }
    }
    return true
  }

  remove(val) {

    if(this.root === null) return false

    let current = this.root
    let parent  = this.root

    // FIND THE NODE
    while(current != null) {

      if(current.value === val) {
      // IF THIS IS A LEAF NODE
      if(current.left === null && current.right === null) {
        this.removeLeafNode(parent, current)
        return true
      // IF THIS NODE HAS 2 CHILDREN
      } else if(current.left !== null && current.right != null) {
        this.removeNodeWithTwoChildren(parent, current)
      } else if(current.left === null || current.right === null) {
        this.bypassNode(parent, current)
        return true
      }
    }

    parent = current
    //  continue looping untill we have found the node
    if(val > current.value) {
      current = current.right
    } else {
      current = current.left
    }
    
  }
    // no such node was found. return false.
    return false
  }
}

const tree = new BinarySearchTree();
tree.insert(20)
tree.insert(18)
tree.insert(30)
tree.insert(22)
tree.insert(40)
tree.insert(19)
tree.insert(10)
tree.insert(7)
tree.insert(15)
tree.insert(13)
tree.remove(18)
tree.remove(10)
tree.remove(20)
tree.remove(22)
tree.remove(30)
tree.remove(40)
tree.remove(19)
tree.remove(7)
tree.remove(13)

module.exports = {
  BinarySearchTree
}


