import "./styles.css";
import JSONFormatter from "json-formatter-js";

let input = document.getElementById("str");
let data = document.getElementById("data");
let error = document.getElementById("error");

input.oninput = () => fn();

function fn() {
  const str = input.value;
  if (str === null || str === undefined) {
    data.innerHTML = `Enter valid JSON`;
    error.innerHTML = ``;
    return;
  } else {
    IsValidJSONString();
  }
}

function IsValidJSONString() {
  const str = input.value;
  try {
    const parseJson = JSON.parse(str);
    const stringifyJson = JSON.stringify(parseJson, null, 2);

    //set configuration for JSON formatting
    const config = {
      hoverPreviewEnabled: true,
      hoverPreviewArrayCount: 100,
      hoverPreviewFieldCount: 5,
      theme: "",
      animateOpen: true,
      animateClose: true,
      useToJSON: true
    };
    if (JSON.parse(str)) {
      const formatter = new JSONFormatter(parseJson, Infinity, config);
      //cleanup old data
      error.innerText = "";
      data.innerText = "";
      // data.appendChild(formatter.render());
      data.appendChild(data.innerHTML);
      error.appendChild(formatter.render());
    }
  } catch (e) {
    error.innerHTML = `Enter valid JSON: <br/>${e.message}`;
    data.innerHTML = `Enter valid JSON: <br/>${e.message}`;
    data.style.color = "red";
    error.style.color = "red";
  }
}
