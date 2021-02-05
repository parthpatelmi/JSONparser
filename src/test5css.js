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
    // data.style.color = "red";
    // error.style.color = "red";
    data.innerHTML = `enter valid json : <br/> ${e.message}`;
    error.innerHTML = `enter valid json : <br/> ${e.message}`;
  }
  let final = JSON.parse(str);
  // console.log(str);
  console.log(final);
  data.appendChild(convertIntoHtml(final));
  document.body.appendChild(convertIntoHtml(final));
  error.appendChild(convertIntoHtml(final));
  console.log("main", convertIntoHtml(final));

  // data.innerHTML = `<pre>${convertIntoHtml(final)}</pre>`;
}

function convertIntoHtml(obj) {
  //   for every level of our JSON object,create a ul element
  var ul = document.createElement("ul");
  //   for every key in the object
  for (let key in obj) {
    //     create a li element
    var li = document.createElement("li");
    var textnode = document.createTextNode(key);
    li.appendChild(textnode);
    //     if there's another level to the object, recursively call our function
    //     this will create a new ul which we'll add after our text
    if (typeof obj[key] === "object") {
      li.appendChild(convertIntoHtml(obj[key]));
    } else {
      //handle textnode
      textnode.textContent += ": " + obj[key];
    }
    //     add our completed li to the ul
    ul.appendChild(li);
  }
  return ul;
}
