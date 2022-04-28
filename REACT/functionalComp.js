function Header(props) {
  return <h1>header in functional component {props.user}</h1>;
}

ReactDOM.render(<Header user="Gokul" />, document.getElementById("root"));
