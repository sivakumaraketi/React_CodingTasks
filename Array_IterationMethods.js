/* created by Siva Kumar Aketi on 29th January 2025
7. Implement error boundaries for error handling in a React app. */

/* 
1.map: Transforms each element in the array and returns a new array.
2.forEach: Performs side effects on each element, doesn’t return a value.
3.filter: Returns a new array containing elements that satisfy a condition.
4.reduce: Aggregates array elements into a single value.
5.some: Checks if at least one element satisfies a condition, returns true or false.
6.find: Returns the first element that satisfies the condition.
7.every: Checks if all elements satisfy a condition, returns true or false.
8.sort: Sorts the array in place.
9.flatMap: Maps and flattens arrays.
10.includes: Checks if an element exists in an array.
11.indexOf / lastIndexOf: Finds the first or last occurrence of an element.
12.slice: Returns a portion of the array (new array).
13.splice: Modifies the original array by removing, replacing, or adding elements.
14.concat: Merges multiple arrays into one.
15.sort: Sorts the array in place (can use custom sorting logic).
16.Object.entries(), Object.keys(), Object.values(): Used to manipulate objects and convert 
them into arrays for iteration.
*/

/* 1. map */
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8, 10]

/* 2. forEach */    
const colors = ['red', 'blue', 'green'];
colors.forEach((color) => console.log(color)); // Output: red, blue, green

/* 3. filter */
const filterNumbers = [1, 2, 3, 4, 5];
const filtered = filterNumbers.filter((num) => num % 2 === 0);
console.log(filtered); // Output: [2, 4]

/* 4. reduce */
const reduceNumbers = [1, 2, 3, 4, 5];
const sum = reduceNumbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // Output: 15

/* 5. some */
const someNumbers = [1, 2, 3, 4, 5];
const hasNegative = someNumbers.some((num) => num < 0);
console.log(hasNegative); // Output: false

/* 6. find */
const findNumbers = [1, 2, 3, 4, 5];
const found = findNumbers.find((num) => num > 3);
console.log(found); // Output: 4

/* 7. every */
const everyNumbers = [1, 2, 3, 4, 5];
const allPositive = everyNumbers.every((num) => num > 0);
console.log(allPositive); // Output: true

/* 8. sort */
const sortNumbers = [3, 1, 5, 2, 4];
sortNumbers.sort((a, b) => a - b);
console.log(sortNumbers); // Output: [1, 2, 3, 4, 5]

/* 9. flatMap */
const flatArray = [[1, 2], [3, 4], [5, 6]];
const flatMapResult = flatArray.flatMap((arr) => arr);
console.log(flatMapResult); // Output: [1, 2, 3, 4, 5, 6]

/* 10. includes */
const fruits = ['apple', 'banana', 'orange'];
const hasBanana = fruits.includes('banana');
console.log(hasBanana); // Output: true

/* 11. indexOf / lastIndexOf */
const indexArray = [1, 2, 3, 4, 2];
const firstIndex = indexArray.indexOf(2);
const lastIndex = indexArray.lastIndexOf(2);
console.log(firstIndex, lastIndex); // Output: 1 4

/* 12. slice */
const sliceArray = [1, 2, 3, 4, 5];
const sliced = sliceArray.slice(1, 3);
console.log(sliced); // Output: [2, 3]

/* 13. splice */
const spliceArray = [1, 2, 3, 4, 5];
const removed = spliceArray.splice(1, 2);
console.log(removed); // Output: [2, 3]

/* 14. concat */
const concatArray1 = [1, 2];
const concatArray2 = [3, 4];
const combined = concatArray1.concat(concatArray2);
console.log(combined); // Output: [1, 2, 3, 4]

/* 15. sort */
const sortArray = [3, 1, 5, 2, 4];
sortArray.sort((a, b) => b - a);
console.log(sortArray); // Output: [5, 4, 3, 2, 1]

/* 16. Object.entries(), Object.keys(), Object.values() */
const person = { name: 'Alice', age: 30 };
const entries = Object.entries(person);
const keys = Object.keys(person);
const values = Object.values(person);
console.log(entries, keys, values); // Output: [['name', 'Alice'], ['age', 30]] ['name', 'age'] ['Alice', 30]


