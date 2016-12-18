/*Write a sorting function (sometimes called a custom comparator),
that sorts the above array first by the name ascending alphabetically,
and in cases where the names are equal sort by descending age. */
'use strict'

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

function compareNames (input) {
  input.sort(function(a, b) {
    const name1 = a.name;
    const name2 = b.name;
    if (name1 > name2) {
      //console.log(name1, name2);
      return 1;
    }
    if (name1 < name2) {
     // console.log(name1, name2);
      return -1;
    }
   // console.log(name1, name2)
    return a.age < b.age;
  });
  return input;
}
console.log(compareNames(students));



