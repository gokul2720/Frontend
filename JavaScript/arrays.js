// var a = ["a", 2, true, { ename: "gp" }];
// console.log(a);
// for (let i = 0; i < a.length; i++) {
//   const element = a[i];
//   console.log(element);
// }

// var b = [10, 20, 30, 40, 50];
// for (let index = 1; index < b.length; index++) {
//   const element = b[index];
//   b[index - 1] = element;
// }
// b[4] = 60;
// console.log(b);

// var b = [10, 20, 30, 40, 50];
// for (let index = 0; index < b.length; index++) {
//   var element = b[index] + 10;
//   b[index] = element;
// }
// console.log(b);

// //using for of loop
// for (var i of b) {
//   console.log(i + 10);
// }

// var person = { name: "gokul", age: 21 };
// for (var key in person) {
//   const element = person[key];
//   console.log(element);
// }

// console.log("start");
// setTimeout(() => {
//   console.log("hello");
// }, 2000);
// setTimeout(() => {
//   console.log("world");
// }, 1000);
// console.log("stop");

// var arr = [
//   "gokul",
//   34,
//   true,
//   undefined,
//   null,
//   { color: "black" },
//   ["black", "blue", "pink"],
// ];
// console.log(arr[2]);
// console.log(arr[4]);
// console.log(typeof arr[3]);
// console.log(arr[5].length);
// console.log(arr[5].color);
// console.log(arr[5]["color"]);
// console.log(arr.length);
// console.log(arr[6][0]);
// console.log(arr[6][2 - 1]);

// var arr = [10, 20, 30, 40, 50, 60];
// var mapMethod = arr.map((value, index, arry) => {
//   console.log(value + 10);
//   console.log(index);
//   console.log(arry);
// });

// var books = [
//   {
//     author: "valmiki",
//     bookName: "ramayana",
//     price: 100,
//     publication: "tomer grade",
//   },
//   {
//     author: "vyasa",
//     bookName: "mahabharat",
//     price: 100,
//     publication: "tomer grade",
//   },
//   {
//     author: "Kalki",
//     bookName: "PS",
//     price: 100,
//     publication: "tomer grade",
//   },
// ];

// var mapMethod = books.map((value, index, array) => {
//   console.log(value);
//   console.log(index);
//   console.log(array);
// });

// books.map((val, ind) => {
//   console.log(val.author);
//   console.log(val.bookName);
//   console.log(val.price);
//   console.log(val.publication);
// });

//filter method

var age = [23, 14, 56, 12, 8, 9, 17, 27, 18];
age.filter((val, ind, arr) => {
  if (val >= 18) {
    console.log(val);
  }
});

var a = [5, 4, 3, 2, 1];
small = a.filter(function (x, i, a) {
  return x < 3;
});
console.log(a);

console.log(small);
other = a.filter(function (x, i) {
  return x + 4;
});

console.log(other);

var a = 232123;
var a = 238491;
console.log(a);

let b = 22;
b = 45;
console.log(b);

const c = 100;
console.log(c++);
