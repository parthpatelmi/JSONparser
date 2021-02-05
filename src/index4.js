import "./styles.css";

let input = document.getElementById("str");
let data = document.getElementById("data");
let error = document.getElementById("error");

function fn() {
  const str = input.value;
  if (str === null || str === "" || str === undefined) {
    data.innerHTML = `Please Enter valid JSON`;
    data.style.color = "red";
    return;
  } else {
    validateJson();
  }
}

function validateJson() {
  let str = input.value;
  try {
    JSON.parse(str);
    error.style.color = "black";

    error.innerHTML = "";
    if (typeof str === "string") {
      error.innerHTML = `<pre>${str}</pre>`;
    }
  } catch (e) {
    error.innerHTML = `Enter valid JSON: <br/>${e.message}`;
    data.innerHTML = `Enter valid JSON: <br/>${e.message}`;
    error.style.color = "red";
    data.style.color = "red";
  }
  data.style.color = "black";
  str = JSON.stringify(JSON.parse(str), null, 2);
  if (typeof JSON.parse(str) !== "string") data.innerHTML = `<pre>${str}</pre>`;
}

let text = document.getElementById("str");
text.oninput = () => fn();
