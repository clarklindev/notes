// --- Directions
// Given a linked list, return the element n spaces
// from the last node in the list.  Do not call the 'size'
// method of the linked list.  Assume that n will always
// be less than the length of the list.
// --- Examples
//    const list = new List();
//    list.insertLast('a');
//    list.insertLast('b');
//    list.insertLast('c');
//    list.insertLast('d');
//    fromLast(list, 2).data // 'b'

function fromLast(list, n) {
    let fast = list.head;
    //find the difference between number of elements n from end
    for(i=0; i<n;i++){
        fast = fast.next;   
    }
    let slow = list.head;    
    //if fast.next === null, then we know slow is n elements from end
    while(fast.next !==null){ 
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}

module.exports = fromLast;
