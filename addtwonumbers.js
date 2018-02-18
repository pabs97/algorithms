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
  let list1 = l1;
  let list2 = l2;
  let nextVal1 = list1.val || 0;
  let nextVal2 = list2.val || 0;
  let sl = sumList = new ListNode();
  let d1;
  let d2 = 0;
  let sum;
  // let sum = new ListNode();

  while (
    nextVal1 ||
    nextVal2 ||
    d2
  ) {
    sum = (list1 && list1.val || 0) + (list2 && list2.val || 0) + d2;
    d1 = sum % 10;
    d2 = Math.floor(sum / 10);

    sumList.val = d1;
    sumList = sumList.next = new ListNode();
    // list1 = list1 && list1.next;
    // list2 = list2 && list2.next;

    nextVal1 = list1.next && list1.next.val || 0;
    nextVal2 = list2.next && list2.next.val || 0;

  }

  return sl;
};

let convertToLinkedList = (number) => {
  let str = number.toString();
  let ln = new ListNode(parseInt(str[str.length - 1]));
  let nn = ln;
  let i = str.length - 2;

  while (i >= 0) {
    nn = nn.next = new ListNode(parseInt(str[i--]));
  }
  return ln;
}

let l1 = new ListNode();