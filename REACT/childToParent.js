class Parent extends React.Component {
  state = {
    text: "Hello",
  };
  render() {
    return (
      <div>
        <h1>{this.state.text}</h1>
        <Child action={this.getDataFromChild.bind(this)} />
      </div>
    );
  }
  getDataFromChild(childData) {
    console.log(childData);
    this.setState({
      text: childData,
    });
  }
}

function Child(props) {
  const str = "Welcome";
  return (
    <div>
      <button onClick={() => props.action(str)}>send data</button>
    </div>
  );
}

ReactDOM.render(<Parent />, document.getElementById("root"));
