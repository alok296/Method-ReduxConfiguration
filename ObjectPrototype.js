// Basic Syntex of ProtoType with Object

// 1.

// var o1 = {
//   // ..
// };
// var o2 = {
//   __proto__: o1,
// };

// 2.

// Object.setPrototypeOf(o2, o1);

//3.
var o1 = {
  foo() {
    console.log("o1:fooparent");
  },
};
var o2 = {
  __proto__: o1,
  foo() {
    super.foo();
    console.log("o2:fooChild");
  },
};
// console.log(Object.setPrototypeOf(o2, o1));
o2.foo();
