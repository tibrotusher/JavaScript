// loops
// for (let count = 1; count <= 5; count++) {
//   console.log('apna college');
// }

// let sum = 0;
// let n = 100;
// for (let i = 1; i <= 100; i++) {
//   sum = sum + i;
// }

// console.log('sum = ', sum);

// infinite loops
// while loops
// let i = 1;
// while (i <= 5) {
//   console.log('i = ', i);
//   i++;
// }

// do while loop
// let i = 20;
// do {
//   console.log('apna college');
//   i++;
// } while (i <= 10);

// for-of loop
// let str = 'JavaScript';

// let size = 0;
// for (let i of str) {
//   console.log('i=', i);
//   size++;
// }

// console.log('string size = ', size);

// for in loop

// let student = {
//   name: 'Tibro Tsher',
//   age: 20,
//   cgpa: 3.24,
//   isPass: true,
// };

// for (let key in student) {
//   console.log('key =', key, 'value=', student[key]);
// }

// practice
// for (let num = 0; num <= 100; num++) {
//   if (num % 2 !== 0) {
//     console.log('num=', num);
//   }
// }

// practice02
// let gameNum = 25;

// let userNum = prompt('Guess the game number:');

// while (userNum != gameNum) {
//   userNum = prompt('You entered wrong number. Guess again:');
// }

// console.log('congratulations, you entered the number');

// strings template literals

// let obj = {
//   item: 'pen',
//   price: 10,
// };

// let output = `the cost of ${obj.item} is ${obj.price} taka`;
// console.log(output);

// practice
let fullName = prompt('enter your fullname without spaces');

let username = '@' + fullName + fullName.length;
console.log(username);
