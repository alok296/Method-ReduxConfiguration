// Mutate the Original Array

// Syntex : Array.fill(value,StartingIndex,EndIndex)
// EndIndex Value will not mutate.
//

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arr1 = arr.fill(8, 3, 5);
console.log(arr1);
console.log(arr);

const array1 = [1, 2, 3, 4];

// fill with 0 from position 2 until position 4
console.log(array1.fill(0, 2, 4));
// expected output: [1, 2, 0, 0]

// fill with 5 from position 1
console.log(array1.fill(5, 1));
// expected output: [1, 5, 5, 5]

console.log(array1.fill(6));
// expected output: [6, 6, 6, 6]
