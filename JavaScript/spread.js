// object copy

let person = {
  name: "Ramana",
  age: 20,
  percentage: "90",
};

let personCopy = { ...person };
person.name = "raja";

personCopy.phoneNumber = "9432932747";
console.log(person, personCopy);

//deep copy of an object
const movie = {
  movieName: "spiderman",
  hero: "bully maguire",
  dialogue: "gonna put some dirt in your eyes",
  extraDetails: {
    villian: "Octo octavius",
    dialogue: "power of the sun in palm of hand",
  },
};

//in shallow copy only first layer will be copied
let movieCopy = { ...movie }; //shallow copy
movie.budget = "200 cr";
movie.extraDetails.heroin = "MJ";
console.log(movie, "movies");
console.log(movieCopy, "movieCopy");

//deepCopy of an object
let deepCopy = {
  ...movie,
  extraDetails: { ...movie.extraDetails },
};

movie.extraDetails.budget = 12371642;
deepCopy.extraDetails.heroin = "mary jane";
console.log(deepCopy, "deepCopy");

//example 2
let employee = {
  name: "Gokul",
  age: 21,
  salary: 40000,
  personalDetails: {
    fatherName: "pandi",
    motherName: "meenakshi",
  },
};

let empCopy = { ...employee };
employee.id = 123;
employee.personalDetails.fatherName = "pandi.s";
console.log(employee);
console.log(empCopy);

//rest operator

function add(...num) {
  let sum = 0;
  console.log(typeof num);
  for (let index = 0; index < num.length; index++) {
    sum += num[index];
  }
  console.log(`sum: ${sum}`);
}

add(10, 20);
add(20, 30, 40);
add(10, 30, 49, 40);
