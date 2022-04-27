// const e1= React.createElement('h1',null,'React JS for me');
// ReactDOM.render(e1,document.getElementById('root'));

// const e1 = React.createElement(
//   "ul",
//   null,
//   React.createElement("li", null, "car"),
//   React.createElement("li", null, "bike")
// );
// ReactDOM.render(e1, document.getElementById("root"));

// const mobiles = ["iphone", "samsung", "redmi", "nokia", "oneplus"];
// const e1 = React.createElement(
//   "ul",
//   null,
//   mobiles.map((mobile, index) => {
//     return React.createElement("li", null, mobile);
//   })
// );

// ReactDOM.render(e1, document.getElementById("root"));

const fruits = ["apple", "orange", "mango", "grapes", "pineapple"];
const data = (
  <ul>
    {fruits.map((fruit, index) => {
      return <li key={index}>{fruit}</li>;
    })}
  </ul>
);
ReactDOM.render(data, document.getElementById("root"));
