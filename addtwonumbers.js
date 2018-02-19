// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  // convert to linkedlist
  if (Array.isArray(l1)) {
    l1 = convertToLinkedList(l1);
    l2 = convertToLinkedList(l2);
  }

  let list1 = l1;
  let list2 = l2;
  let nextVal1 = list1.val || 0;
  let nextVal2 = list2.val || 0;
  let sl = sumList = new ListNode();
  let d1;
  let d2 = 0;
  let sum;

  while (nextVal1 != null || nextVal2 != null || d2) {
    sum = nextVal1 + nextVal2 + d2;
    d1 = sum % 10;
    d2 = Math.floor(sum / 10);

    sumList.val = d1;
    sumList.next = new ListNode();
    sumList = sumList.next;

    list1 = list1 && list1.next;
    list2 = list2 && list2.next;
    nextVal1 = list1 && list1.val;
    nextVal2 = list2 && list2.val;
  }

  // return sl;
  return linkedListToArray(sl);
};

let convertToLinkedList = (number) => {

  // Supporting Array
  if (Array.isArray(number)) {
    number = number.join('');
  }

  let str = number.toString();
  let ln = new ListNode(parseInt(str[str.length - 1]));
  let nn = ln;
  let i = str.length - 2;

  while (i >= 0) {
    nn = nn.next = new ListNode(parseInt(str[i--]));
  }
  return ln;
};

let linkedListToArray = ll => {
  let arr = [];
  arr.push(ll.val);

  while (ll.next && ll.next.val) {
    ll = ll.next;
    arr.push(ll.val);
  }
  return arr;
};