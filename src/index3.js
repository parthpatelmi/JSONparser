import "./styles.css";

let data = document.getElementById("data");

function fn() {
  const str = document.getElementById("str").value;
  if (str === null || str === "" || str === undefined) {
    data.innerHTML = ``;
    return;
  } else {
    validateJson();
  }
}

function validateJson() {
  let str = document.getElementById("str").value;
  try {
    JSON.parse(str);
  } catch (e) {
    data.innerHTML = `Looks like something's not right: <br/>${e}`;
  }
  str = JSON.stringify(JSON.parse(str), null, 4);
  data.innerHTML = `<pre>${str}</pre>`;
}

let text = document.getElementById("str");
text.oninput = () => fn();
