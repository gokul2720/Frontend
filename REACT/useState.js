function App() {
  const [name, setName] = React.useState("alan");
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
