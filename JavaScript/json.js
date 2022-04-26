const obj = {
  name: "Gokul",
  age: 21,
  Isadult: true,
  hobbies: ["drawing", "movies"],
  address: {
    state: "TamilNadu",
    City: "Coimbatore",
    pincode: 641006,
  },
};

//converting from javaScript to json
const jsonObj = JSON.stringify(obj);
console.log(jsonObj);

const JSObj = JSON.parse(jsonObj);
console.log(JSObj);
