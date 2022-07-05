// array.at(index)   vs   array.indexOf(element)

const array1 = [130, 5, 12, 8, 130, 44];

let index = 2;

console.log(
  `Using an index of ${index} the item returned is ${array1.at(index)}`
);

index = -2;
console.log(`Using an index of ${index} item returned is ${array1.at(index)}`);

console.log(array1.lastIndexOf(130));
