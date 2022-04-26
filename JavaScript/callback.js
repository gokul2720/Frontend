// function first(callback) {
//   setTimeout(() => {
//     console.log("first executed");
//     callback();
//   }, 5000);
// }
// function second() {
//   setTimeout(() => {
//     console.log("second executed");
//   }, 2000);
// }

// first(second);

console.log("hello"); //semicolon is required when you are writing some code immediately after the function

console.log(10 + 20 > 40 ? "true" : "false");

console.log("__________________________________");
function test() {
  console.log("first function");
  function inner() {
    console.log("inner function");
  }
  return inner;
}

test()(); //function currying
