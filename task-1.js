/*
1.Task: Array Filtering and Mapping

Create an array of objects, each representing a person with properties like name, age, and gender. Write a function to filter out all females and then map the remaining people to an array of names. Print the final result.

*/
const people = [
  { name: "Alice", age: 25, gender: "female" },
  { name: "Bob", age: 30, gender: "male" },
  { name: "Charlie", age: 22, gender: "male" },
  { name: "Diana", age: 28, gender: "female" },
  { name: "Ethan", age: 35, gender: "male" },
  { name: "Fiona", age: 27, gender: "female" },
  { name: "George", age: 40, gender: "male" },
  { name: "Hannah", age: 23, gender: "female" },
];
function filterOutWomen(people) {
  return people
    .filter((p) => p.gender.toLowerCase() !== "female")
    .map((p) => p.name);
}
console.log(filterOutWomen(people));
