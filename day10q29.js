//favourite_fruite array
var favourite_fruite = ['apple', 'banana', 'cherry', 'mango'];
//Function to check if fruit is in array
function checkIfFruiteIsInArray(fruite) {
    return favourite_fruite.indexOf(fruite) !== -1;
}
//Example
var fruiteToCheck = 'apple';
if (checkIfFruiteIsInArray(fruiteToCheck)) {
    console.log('You really like', fruiteToCheck, '.');
}
//Another example
var fruiteToCheck1 = 'banana';
if (checkIfFruiteIsInArray(fruiteToCheck1)) {
    console.log('You really like', fruiteToCheck1, '.');
}
//Another example
var fruiteToCheck2 = 'cherry';
if (checkIfFruiteIsInArray(fruiteToCheck2)) {
    console.log('You really like', fruiteToCheck2, '.');
}
//Another example
var fruiteToCheck3 = 'mango';
if (checkIfFruiteIsInArray(fruiteToCheck3)) {
    console.log('You really like', fruiteToCheck3, '.');
}
