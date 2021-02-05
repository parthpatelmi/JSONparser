import "./styles.css";

let input = document.getElementById("str");
let data = document.getElementById("data");
let error = document.getElementById("error");

input.oninput = () => validateJson();

// function fn() {
//   const str = input.value;
//   if (str === null || str === "" || str === undefined) {
//     data.innerHTML = `Please Enter valid JSON`;
//     data.style.color = "red";
//     return;
//   } else {
//     validateJson();
//   }
// }

function validateJson() {
  let str = input.value;
  try {
    JSON.parse(str);
    console.log(JSON.parse(str));
    error.innerHTML = JSON.stringify(eval(str));
    error.style.color = "green";
  } catch (e) {
    data.style.color = "red";
    error.style.color = "red";
    data.innerHTML = `enter valid json : <br/> ${e.message}`;
    error.innerHTML = `enter valid json : <br/> ${e.message}`;
  }
  if (typeof JSON.parse(str) === "object") {
    let final = JSON.stringify(JSON.parse(str), null, 2);
    data.style.color = "green";
    error.style.color = "green";
    data.innerHTML = `<pre>${final}</pre>`;
    error.innerHTML = `<pre>${final}</pre>`;
  }
}
