class Node {
    constructor(data) {
        this.data = data;
    }

    getNext() {
        return this.next;
    }

    setNext(n) {
        this.next = n;
    }

    getData() {
        return this.data;
    }
}

class LinkedList {
    constructor() {
        this.root = undefined;
    }

    enQueue(value) {
        let node =  new Node(value);
        if(!this.root) {
            this.root = node;
        } else {
            let temp = this.root;
            while(temp.getNext()) {
                temp = temp.getNext();
            }
            temp.setNext(node);
        }
    }

    print() {
        let result = [];
        let temp = this.root;
        while(temp) {
            result.push(temp.getData());
            temp = temp.getNext();
        }
        console.log(result.join( ' => '));
    }

    deQueue(val) {
        let temp;
        let previousNode;
        if (!this.root) {
            return;
        }

        if(this.root.getData() === val) {
            this.root = this.root.getNext();
            return;
        }
        previousNode = this.root;
        temp = this.root.getNext();
        while(temp) {
            if (temp.getData() !== val) {
                previousNode = temp;
                temp = temp.getNext();
            } else {
                previousNode.setNext(temp.getNext());
                break;
            }
        }
    }
}

let list = new LinkedList()
list.enQueue(5);
list.enQueue(6);
list.enQueue(1);
list.enQueue(8);
list.enQueue(9);
list.enQueue(6);
list.enQueue(4);
list.enQueue(3);

console.log("Printing the linked list before removing 6");
list.print();

list.deQueue(6);
console.log("Printing linked list after removing 6");
list.print();
