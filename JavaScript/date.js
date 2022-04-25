let systemDate = new Date();
console.log(systemDate.getDate());
console.log(systemDate.getDay());
console.log(systemDate.getFullYear());
console.log(systemDate.getHours());
console.log(systemDate.getMilliseconds());
console.log(systemDate.getMonth());
console.log(systemDate.getTime());

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let date1 = new Date("December/21/2021");
console.log(date1);
let dateVal = date1.getDate();
let dateMonth = months[date1.getMonth()];
let dateYear = date1.getFullYear();

var fullDate = `${dateMonth}/${dateVal}/${dateYear}`;
console.log(fullDate);
