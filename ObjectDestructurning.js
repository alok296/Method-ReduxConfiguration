// Object Assignment and Destructuring in js
// 1.
var o1 = { a: 1, b: 2, c: 3 },
  a2 = [];
({ a: a2[0], b: a2[1], c: a2[2] } = o1);
console.log(a2); //1,2,3

// 2.
var a1 = [1, 2, 3],
  o2 = {};
[o2.a, o2.b, o2.c] = a1;
console.log(o2.a, o2.b, o2.c);

// 3.
function f6({ x = 10 } = {}, { y } = { y: 10 }) {
  console.log(x, y);
}
f6();
f6(undefined, undefined);
f6({}, undefined); // 10 10
// 10 10
// 10 10
f6({}, {});

// 4.

var defaults = {
  options: {
    remove: true,
    enable: false,
    instance: {},
  },
  log: {
    warn: true,
    error: true,
  },
};

var config = {
  options: {
    remove: false,
    instance: null,
  },
};

config = Object.assign({}, config, defaults);
console.log(config);

// 5 Getter and setter in object.

// var o = {
//   __id: 10,
//   get id() {
//     return this.__id++;
//   },
//   set id(v) {
//     this.__id = v;
//   },
// };

// console.log(o.id, o.id, (o.id = 50), o.id, o.__id, o.__id);



