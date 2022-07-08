// // 1.

var funcs = [];
for (var i = 0; i < 5; i++) {
  funcs.push(function () {
    console.log(i);
  });
}

funcs[3]();

// //2.

function foo(x, y) {
  x = 0 in arguments ? x : 11;
  y = 1 in arguments ? y : 31;
  console.log(x + y);
}
foo(5); // 36
foo(5, undefined);

// 3

function foo(x, y) {
  x = x !== undefined ? x : 11;
  y = y !== undefined ? y : 31;
  console.log(x + y);
}
foo(0, 42); // 42
foo(undefined, 6);

// 5

function bar(val) {
  console.log("bar called!");
  console.log(val);
  return y + val;
}
function foo(x = y + 3, z = bar(x)) {
  console.log(x, z);
}

var y = 4;
foo(10);

//6

var w = 1;
var z = 2;
function foo(x = w + 1, y = x + 1, z = z + 1) {
  console.log(z);
  console.log(x, y, z);
}
foo();

// resolve error througt this

function foo(
  x = (function (val) {
    return val + 1;
  })(20)
) {
  console.log(x);
}

foo();
