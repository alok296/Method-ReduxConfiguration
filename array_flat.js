//  Array.flat method take Default value as 1 but accordingly we can manipulate it.

const { Interface } = require("readline");

const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());

const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(Infinity));
console.log(arr2.flat(3));

function flatten(items) {
  const flat = [];
  items.forEach((item, index) => {
    if (items[index] instanceof Array) {
      // if (Array.isArray(item)) {
      flat.push(...flatten(item));
    } else {
      flat.push(item);
    }
  });

  return flat;
}

console.log(flatten(arr2));
