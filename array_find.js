// Array.Find method always find items from left to right when ever condition is true it return the value.
// its take three arguments:- element , index,array

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find((element, index, Array) => {
//     element > 10;
// });

// console.log(array1);

const studentData = [
  {
    fname: "peter",
    lname: "johns",
    strengths: ["music", "Art"],
    exams: [
      {
        Maths: 90,
        Science: 50,
        Physics: 45,
        Chemistry: 88,
        English: 66,
      },
    ],
  },
  {
    fname: "annika",
    lname: "singh",
    strengths: ["coking", "Art"],
    exams: [
      {
        Maths: 45,
        Science: 50,
        Physics: 89,
        Chemistry: 74,
        English: 56,
      },
    ],
  },
  {
    fname: "Deo",
    lname: "innas",
    strengths: ["cricket", "badminton"],
    exams: [
      {
        Maths: 55,
        Science: 48,
        Physics: 61,
        Chemistry: 79,
        English: 69,
      },
    ],
  },
];

// studentData.find((element) => {
//   var result;
//   Object.values(element.exams[0]).reduce(
//     (element, nextelement) => (result = element + nextelement)
//   );
//   element.exams[0].total = result;
// });

// console.log(studentData);

const newResult = studentData.find(({ exams }) => {
  var result;
  Object.values(exams[0]).reduce(
    (element, nextelement) => (
      (result = element + nextelement), (exams[0].total = result)
    )
  );
});
console.log(studentData);

//---------------------------------------------------------------------------------------------

const inventory = [
  { name: "apples", quantity: 2 },
  { name: "bananas", quantity: 0 },
  { name: "cherries", quantity: 2 },
];

const result = inventory.find(({ name, quantity }) => {
  return name == "cherries", quantity == 2;
});

console.log(result);

//----------------------------------------------------------------------------------------------

// Find the Prime Number using Find Methods

const Prime = [4, 6, 8, 12, 7];
const newPrime = Prime.find((element) => {
  let start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
});
console.log(newPrime);
