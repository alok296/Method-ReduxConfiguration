// Object Assignment and Destructuring in js

var o1 = { a: 1, b: 2, c: 3 },
  a2 = [];
({ a: a2[0], b: a2[1], c: a2[2] } = o1);
console.log(a2); //1,2,3


var a1 = [1, 2, 3],
  o2 = {};
[o2.a, o2.b, o2.c] = a1;
console.log(o2.a, o2.b, o2.c);
