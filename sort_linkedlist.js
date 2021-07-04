
class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    append(val) {
        const node = new Node(val)

        if(this.head == null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = new Node(val)
            this.tail = this.tail.next
        }
    }

    sort(node = this.head) {

        let counter = 1;

        let current = this.head

        while(current!= null) {
            current = current.next
            counter++;
        }

        for(let i = 0; i <= counter; i++) {
            let currHead = this.head
            while(currHead) {
                if(currHead && currHead.next && currHead.val > currHead.next.val) {
                    let tempval = currHead.next.val
                    currHead.next.val = currHead.val
                    currHead.val = tempval
                }
                currHead = currHead.next
            }
        }
    }

    print() {
        let current = this.head;
        let str = current.val
        while(current.next!= null) {
            str+= "->"+current.next.val
            current = current.next
        }
        console.log(str)
    }
}

const linkedList = new LinkedList()

linkedList.append(4)
linkedList.append(2)
linkedList.append(1)
linkedList.append(3)
linkedList.print()
linkedList.sort()
linkedList.print()


