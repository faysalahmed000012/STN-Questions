/*
3.Task: Function Composition

Write three functions: one to square a number, one to double a number, and one to add 5 to a number. Compose these functions to create a new function that squares a number, doubles the result, and then adds 5.

*/
function square(number) {
    return number * number;
}
function double(number) {
    return number * 2;
}
function addFive(number) {
    return number + 5;
}
function doEverything(number) {
    return addFive(double(square(number)));
}
console.log(doEverything(2));
