import "./styles.css";
let input = document.getElementById("str");
let data = document.getElementById("data");
let error = document.getElementById("error");

input.oninput = () => checkInput();

function checkInput() {
  let str = input.value;
  if (str === "{}") {
    data.innerHTML = "{}";
    error.innerHTML = "{}";
    data.style.color = "green";
    error.style.color = "green";
  } else {
    validateJson();
  }
}
function validateJson() {
  let str = input.value;
  try {
    JSON.parse(str);
    // console.log(JSON.parse(str));
    error.innerHTML = JSON.stringify(eval(str));
    error.style.color = "green";
  } catch (e) {
    data.style.color = "red";
    error.style.color = "red";
    data.innerHTML = `enter valid json : <br/> ${e.message}`;
    error.innerHTML = `enter valid json : <br/> ${e.message}`;
    error.innerHTML = e;
  }
  if (typeof JSON.parse(str) === "object") {
    let final = JSON.parse(str);

    //cleanup when reRender
    data.innerHTML = "";
    error.innerHTML = "";
    data.innerHTML = convertToHtmlTree(final);
    error.innerHTML = convertToHtmlTree(final);
    data.style.color = "green";
    error.style.color = "green";
    // console.log("main", convertToHtmlTree(final));
  }
}

function convertToHtmlTree(object) {
  let html = "<ul>";
  for (let prop in object) {
    let value = object[prop];
    if (typeof value === "object") {
      html += `<li><label for="toggle">Toggle</label>
      <input type="checkbox" id="toggle" class="visually-hidden">
      ${prop} :${value}
      <div class="display">${convertToHtmlTree(value)}</div></li>`;
    } else {
      html += ` <li>${prop} : ${value}</li>`;
    }
  }
  return html + "</ul>";
}
