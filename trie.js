class Node {

    constructor(val) {
        this.val = val
        this.children = {}
        this.isCompleteWord = false
        this.endCount = 0
    }

    incrementEndcount() {
        this.endCount++
    }

    getVal() {
        return this.val
    }

    setVal(val) {
        this.val = val
    }

    getEndCount() {
        return this.endCount
    }

    setEndCount(endCount) {
        this.endCount = endCount
    }

    getChildren() {
        return this.children
    }

    addChild(key, node) {
        this.children[key] = node
    }
}

class Trie {

    constructor() {
        this.root = new Node('*')
    }

    treeShape(node = this.root) {

        const tree = {
            value: node.getVal()
        }

        const children = node.children

     
        for (let [key, node] of Object.entries(children)) {
            tree[key] = this.treeShape(node)
        }
        
        return tree
    }

    lookup(word, current = this.root, count = 0) {

        if(word.length === count) {
            return current.isCompleteWord ? true : false
        } 

        const children = current.getChildren()
        const char = word[count]

        if(!children[char]){
            return false
        } 

        count = count + 1

        return this.lookup(word, children[char], count)
    }

    startsWith(word, current = this.root, count = 0) {
        const children = current.getChildren()
        if(word.length === count && count !== 0) {
            return true
        } else {

            const char = word[count]

            if(!children[char]){
                return false
            } 

            count = count + 1

            return this.startsWith(word, children[char], count)
        }
    }

    insert(word, current = this.root, count = 0) {

        if(word.length === count && count != 0) {
            current.isCompleteWord = true
            return true
        } else {
            const children = current.getChildren()
            const char = word[count]

            if(!children[char]) {
                current.addChild(
                    word[count],
                    new Node(char)
                )
            }
            count = count + 1
            return this.insert(word, children[char], count)
        }
    }
}

const trie = new Trie()
trie.insert('a')

console.log(trie.startsWith('a'))
