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
  let mainHtml = drawRecElements(final);
  console.log("fn", drawRecElements(final));
  data.innerHTML = mainHtml;
  // document.body.innerHTML = mainHtml;
}

function drawRecElements(arr) {
  // if (typeof html === "undefined") {
  //   let html = "";
  // }
  let html = "";
  if (typeof arr === "string") {
    return "<li>" + arr + "</li>";
  } else if (typeof arr === "object") {
    for (let i in arr) {
      if (typeof arr[i] === "string") {
        html += `<li>${i} : ${arr[i]}</li>`;
      } else if (typeof i === "string" && isNaN(i)) {
        html += `<ul><li>${i} : ${drawRecElements(arr[i], "")}</li></ul>`;
      } else if (typeof arr[i] === "object") {
        html = drawRecElements(arr[i]);
      }
    }
  }
  return html;
}
