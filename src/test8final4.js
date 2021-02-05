import "./styles.css";
let input = document.getElementById("str");
let data = document.getElementById("data");
let error = document.getElementById("error");

input.oninput = () => validateJson();

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
  }
  let final = JSON.parse(str);
  // console.log(str);
  console.log(final);
  data.innerHTML = convertToHtmlTree(final);
  error.innerHTML = convertToHtmlTree(final);
  data.style.color = "green";
  error.style.color = "green";
  console.log("main", convertToHtmlTree(final));
}

function convertToHtmlTree(object) {
  let html = "<ul>";
  for (let prop in object) {
    let value = object[prop];
    if (typeof value === "object") {
      // let token = Math.random().toString(36).substr(2, 16);
      html += `<li><a href=# class="close">close</<a><a href='#' class="open">${prop} :${value}</a>
      <div class="divDisplay">${convertToHtmlTree(value)}</div></li>`;
    } else {
      html += ` <li>${prop} : ${value}</li>`;
    }
  }
  return html + "</ul>";
}
