// This method mutate the value of Original Array.
// >>>>>>>>>>>>>>>>>copyWithin(target, start, end)<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

const array1 = ["a", "b", "c", "d", "e"];

const newtest = array1.copyWithin(0, 3, 4);
console.log(newtest);
// expected output: Array ["d", "b", "c", "d", "e"]

// copy to index 1 all elements from index 3 to the end
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "d", "e", "d", "e"]
