// var number = Math.min(1, 32, 46, 6, 3, 8);
// console.log(number);

// var number1 = Math.max(1, 32, 46, 6, 3, 8);
// console.log(number1);

// var num = Math.random(3, 5, 2, 9, 6, 8, 7, 4, 1);
// console.log(num);

// console.log(Math.floor(4.789));
// console.log(Math.ceil(4.789));

// var arr = ["ram", "tom", "doduk"];
// var randomIndex = Math.floor(Math.random() * arr.length);
// console.log(randomIndex + 1);
// console.log(arr[randomIndex]);

let arr = [1, 2, 3, 4, 5, 6];

let arrCopy = arr; //In this case both arr and arrCopy are referring to the same address
arrCopy.push(56);
console.log(arr);
console.log(arrCopy);

//using spread operator(...)
let arr2 = [1, 2, 3, 4, 5, 6];
let arrCopy2 = [...arr2]; //In this case the addresses are different. this is Shallow copy
arrCopy2.push(57);

console.log(arr2);
console.log(arrCopy2);
