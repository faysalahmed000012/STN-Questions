/*

4.Task: Sorting Objects

Create an array of objects representing cars with properties like make, model, and year. Write a function to sort the array of cars by the year of manufacture in ascending order. Print the sorted array.

*/
const cars = [
  { make: "Toyota", model: "Camry", year: 2021 },
  { make: "Honda", model: "Accord", year: 2019 },
  { make: "Ford", model: "Mustang", year: 2020 },
  { make: "Chevrolet", model: "Malibu", year: 2018 },
  { make: "Tesla", model: "Model 3", year: 2022 },
  { make: "BMW", model: "X5", year: 2021 },
  { make: "Audi", model: "A4", year: 2020 },
  { make: "Mercedes-Benz", model: "C-Class", year: 2019 },
];
function sortCars(cars) {
  console.log(cars.sort((a, b) => a.year - b.year));
}
sortCars(cars);
