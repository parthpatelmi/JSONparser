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

var tree = document.querySelectorAll("ul.tree a:not(:last-child)");
for (var i = 0; i < tree.length; i++) {
  tree[i].addEventListener("click", function (e) {
    var parent = e.target.parentElement;
    var classList = parent.classList;
    if (classList.contains("open")) {
      classList.remove("open");
      var opensubs = parent.querySelectorAll(":scope .open");
      for (var i = 0; i < opensubs.length; i++) {
        opensubs[i].classList.remove("open");
      }
    } else {
      classList.add("open");
    }
    e.preventDefault();
  });
}

function convertToHtmlTree(object) {
  var json = "<ul>";
  for (let prop in object) {
    var value = object[prop];
    switch (typeof value) {
      case "object":
        json +=
          "<li><a class='label' href='#" +
          "' data-toggle='collapse'>" +
          prop +
          "=" +
          value +
          "</a><div id='" +
          "' class='collapse'>" +
          convertToHtmlTree(value) +
          "</div></li>";
        break;
      default:
        json += "<li>" + prop + "=" + value + "</li>";
    }
  }
  return json + "</ul>";
}
