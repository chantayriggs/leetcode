/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let final = new ListNode(0);
  let current = final;
  let carryValue = 0;

  while (l1 !== null || l2 !== null) {
    const currentTotal = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carryValue;
    const greaterThanTen = currentTotal >= 10;
    const toAdd = greaterThanTen ? currentTotal % 10 : currentTotal;
    if (greaterThanTen) {
      carryValue = 1;
    } else {
      carryValue = 0;
    }

    current.next = new ListNode(toAdd);
    current = current.next;

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }

  if (carryValue > 0) {
    current.next = new ListNode(carryValue);
  }

  return final.next;
};
