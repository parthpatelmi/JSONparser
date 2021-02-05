import "./styles.css";

// let renderjson;
let input = document.getElementById("str");
let data = document.getElementById("data");
let error = document.getElementById("error");

// input.oninput = () => fn();
input.oninput = () => validateJson();

function fn() {
  const str = input.value;
  if (str === null || str === undefined) {
    data.innerHTML = `Enter valid JSON`;
    error.innerHTML = ``;
    return;
  } else {
    validateJson();
  }
}

function validateJson() {
  let str = input.value;
  try {
    JSON.parse(str);
    error.innerHTML = JSON.stringify(eval(str));
    error.style.color = "green";
  } catch (e) {
    error.innerHTML = `Enter valid JSON: <br/>${e.message}`;
    data.innerHTML = `Enter valid JSON: <br/>${e.message}`;
    error.style.color = "red";
    data.style.color = "red";
  }
  renderjson.set_show_to_level("all");
  if (typeof JSON.parse(str) === "object") {
    data.innerHTML = "";
    error.innerHTML = "";
    data.style.color = "green";
    error.style.color = "green";
    data.appendChild(renderjson(JSON.parse(str)));
    error.appendChild(renderjson(JSON.parse(str)));
  }
}
