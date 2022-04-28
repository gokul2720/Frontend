function Header(props) {
  return <h1>header in functional component {props.user}</h1>;
}

// function Content(props) {
//   return (
//     <h1>
//       {props.sub1}
//       {props.sub2}
//       {props.sub3}
//       {props.sub4}
//     </h1>
//   );
// }

function Content({ sub1, sub2, sub3, sub4 }) {
  return (
    <h1>
      {sub1}
      {sub2}
      {sub3}
      {sub4}
    </h1>
  );
}

function Footer({ person }) {
  //if we provide person as an object, no need to use props. otherwise the syntax must be props.person.fname
  return (
    <h1>
      {person.fname}
      {person.lname}
    </h1>
  );
}

ReactDOM.render(
  <div>
    <Header user="Gokul" />
    <Content sub1="English " sub2="Maths " sub3="Science " sub4="Language " />
    <Footer person={{ fname: "Gokul ", lname: "P" }} />
  </div>,
  document.getElementById("root")
);
