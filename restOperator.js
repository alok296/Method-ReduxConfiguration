// function tag(strings, ...values) {
//   console.log(strings, ...values);
//   return strings.reduce(function (s, v, idx) {
//     return s + (idx > 0 ? values[idx - 1] : "") + v;
//   }, "");
// }
// var desc = "awesome func";
// var text = tag`Everything is ${desc}!`;
// // console.log(text);

// console.log(tag`awesome`);

// function showraw(strings, ...values) {
//   console.log(strings);
//   console.log(strings.raw);
// }
// showraw`Hello\nWorld`;


function add(x, y, fun) {
  fun(x + y);
}

function result(res) {
  console.log(res);
}

add(45, 67, result);




