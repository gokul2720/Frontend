class Login extends React.Component {
  state = {
    condition: false,
  };

  getDataFromChild(cond) {
    console.log(cond);
    this.setState({
      condition: cond,
    });
  }
  render() {
    if (this.state.condition) {
      return (
        <div>
          <h2>Admin</h2>
          <h3>Login</h3>
          <h3>Home</h3>
          <Child action={this.getDataFromChild.bind(this)} />
        </div>
      );
    } else {
      return (
        <div>
          <h2>User</h2>
          <h3>login</h3>
          <Child action={this.getDataFromChild.bind(this)} />
        </div>
      );
    }
  }
}

function Child(props) {
  return (
    <div>
      <button onClick={() => props.action(true)}>Admin login</button>
      <button onClick={() => props.action(false)}>User login</button>
    </div>
  );
}

ReactDOM.render(<Login />, document.getElementById("root"));
