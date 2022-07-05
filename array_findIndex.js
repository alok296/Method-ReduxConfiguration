// It return Index of Element which we want to index value but it take index from left to right and return most possible result.
const array1 = [5, 12, 8, 7, 6, 9, 44, 87, 8];

// const isLargeNumber = (element) => element > 13;
const newarray1 = array1.findIndex((element) => {
  return element > 12;
});
console.log(newarray1);
