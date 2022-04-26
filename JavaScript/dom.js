// console.log(window);

// navigator.geolocation.getCurrentPosition((loc) => {
//   console.log("location", loc);
// });

// console.log(this === window);

document.write("welcome to DOM session");

//it returns single element
const element = document.getElementById("demo");
element.innerText = "hello peter";

const pElement = document.getElementsByName("ptag");
element.style.backgroundColor = "red";

const para = document.createElement("p");
para.innerHTML = "this is my first element created by javaScript";
document.body.appendChild(para);

let element2 = document.getElementsByClassName("name");
element2.innerHTML = "hiiiii";

const h1Element = document.querySelector("h1");
console.log("h1Element: ", h1Element);
