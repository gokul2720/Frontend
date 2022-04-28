class Welcome extends React.Component {
  state = {
    name: "Gokul",
  };
  changeName() {
    //asynchronous
    this.setState({
      name: "Rajan",
    });
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
        <button onClick={() => this.changeName()}>Change</button>
      </div>
    );
  }
}

ReactDOM.render(<Welcome />, document.getElementById("root"));
