class Header extends React.Component {
  render() {
    //for single element
    // return <h1>Header Class Component</h1>;

    //for multiple elements to return
    console.log(this.props.name); //this is used for the property name
    return (
      <div>
        <h1>Header Class Component</h1>
        <h2>Hello</h2>
        <p>good afternoon {this.props.name}</p>
      </div>
    );
  }
}
ReactDOM.render(<Header name="gp" />, document.getElementById("root"));
