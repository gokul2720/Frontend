const fruits = ["apple", "orange", "mango", "grapes", "pineapple"];
const data = (
  <ul>
    {fruits.map((fruit, index) => {
      return <li key={index}>{fruit}</li>;
    })}
  </ul>
);
ReactDOM.render(data, document.getElementById("root"));
