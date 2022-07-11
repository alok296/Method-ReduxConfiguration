// 1

var str = "shubam";
var finalstr = "";
var str1 = str.split("");
for (let i = 0; i < str1.length; i++) {
  var str2 = str1[i].toUpperCase();
  finalstr = finalstr + str2;
  var ind = str1.indexOf(str1[i]);
  for (let j = 0; j < ind; j++) {
    finalstr = finalstr + str[i];
  }
  finalstr += "-";
}
console.log(finalstr.slice(0, -1));

// 2

function converter(s) {
  var strSplit = s.toLowerCase().split("");
  var newArr = strSplit.map(
    (element, i) => `${element.toLocaleUpperCase()}${element.repeat(i)}`
  );

  console.log(newArr.join("-"));
  return newArr.join("-");
}

converter("Shubham");
