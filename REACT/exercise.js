//JSX
const cars = ["audi", "bmw", "mercedes", "bugatti", "koenigseigg"];

const carData = (
  <ul>
    {cars.map((car, index) => {
      return <li key={index}>{car}</li>;
    })}
  </ul>
);

//React element
const e1 = React.createElement(
  "ul",
  null,
  cars.map((car, index) => {
    return React.createElement("li", null, car);
  })
);
ReactDOM.render(
  <div>
    {carData},{e1}
  </div>,
  (document.getElementById = "root")
);
