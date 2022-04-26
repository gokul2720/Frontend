let person = {
  name: "ram",
  age: 23,
  salary: function add() {
    console.log(this);
  },
};
person.salary();
