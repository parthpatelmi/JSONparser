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
  // data.appendChild(convertToHtmlTree(final));
  data.innerHTML = convertToHtmlTree(final);
  // error.appendChild(renderList(final));
  console.log("main", convertToHtmlTree(final));
  // data.innerHTML = `<pre>${renderList(final)}</pre>`;
}

function convertToHtmlTree(object) {
  let html = "<ul>";
  for (let prop in object) {
    let value = object[prop];
    if (typeof value === "object") {
      let token = Math.random().toString(36).substr(2, 16);
      html +=
        "<li><a class='label' href='#" +
        token +
        "' data-toggle='collapse'>" +
        prop +
        "=" +
        value +
        "</a><div id='" +
        token +
        "' class='collapse'>" +
        convertToHtmlTree(value) +
        "</div></li>";
    } else {
      html += "<li>" + prop + "=" + value + "</li>";
    }
  }
  return html + "</ul>";
}
