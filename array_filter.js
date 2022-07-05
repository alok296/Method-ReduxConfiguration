// Find the Prime Number Using filter Method...

const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const newarr = array.filter((value) => {
  for (let i = 2; value > i; i++) {
    if (value % i == 0) {
      return false;
    }
  }
  return value > 1;
});

// console.log(newarr);

// _____________________________________________________________________________________________//

const friends = [
  {
    name: "Anna",
    books: ["Bible", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];

const testarr = [];
const newvalue = friends.filter((value) => {
  testarr.push(value.books);
  testarr.push(value.books);
  //   testarr.flat(Infinity);

  return testarr;
});
console.log(testarr.flat(Infinity));

// _____________________________________________________________________________________

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

const newdata = studentData.filter((value, index, array) => {
  var total;
  Object.values(value.exams[0]).reduce(
    (marks, nextmarks) => (total = marks + nextmarks)
  );
  value.exams[0].total = total;
  return value.exams[0].total;
});

console.log(newdata);
console.log(studentData);

//______________________________________________________________________________________


