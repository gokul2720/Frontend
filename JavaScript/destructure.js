let obj = {
  name1: "ram",
  age: 22,
  id: "ty",
};

const { name1, age, id } = obj;
console.log(obj.name1);
console.log(name1);

const hobbies = ["dancing", "rampwalk", "travelling", "drawing"];
const [hobby1, hobby2, hobby3, hobby4] = hobbies;

console.log(`hobby1-${hobby1}`);
console.log(`hobby2-${hobby2}`);
console.log(`hobby3-${hobby3}`);
console.log(`hobby4-${hobby4}`);
