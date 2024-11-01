/*

5.Task: Find and Modify

Write a function that searches an array of objects for a specific person by name. If found, modify their age property. Print the updated array.

*/
const persons = [
  { name: "John", age: 25 },
  { name: "Alice", age: 30 },
  { name: "Bob", age: 35 },
];
function modifyAge(array, name, newAge) {
  const person = array.find((person) => person.name.toLowerCase() === name);
  if (person) {
    person.age = newAge;
  } else {
    console.log("Sorry, The person you are looking is not found");
  }
}
modifyAge(persons, "john", 20);
console.log(persons);
