// localStorage.setItem("email", "abc@1234");
// document.write(localStorage.getItem("email"));

// sessionStorage.setItem("email", "gddf@gaaji.com");
// document.write(sessionStorage.getItem("email"));

let a;
function login() {
  const val = localStorage.getItem("a");
  sessionStorage.setItem("sessionId", 123);
  console.log("a before click", a);
  if (val) {
    a = Number(val);
  } else {
    a = 10;
    localStorage.setItem("a", a);
  }
}

function increment() {
  a += 10;
  console.log("a after click", a);
}
