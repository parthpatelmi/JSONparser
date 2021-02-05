import "./styles.css";
var allData = {
  Home: {
    Home_Sub: ["home1", "home2", "home3"]
  },
  About: ["about1", "about2", "about3"],
  Contact: ["contact1", "contact2", "contact3"]
};

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
  var array = ["<ul>"];
  function printList(items) {
    switch (typeof items) {
      case "object":
        getChildren(items);
        break;
      case "string":
        array.push("<li>" + items + "</li>");
        //console.log(items);
        break;
      case "array":
        printArray(items);
        break;
      default:
        return;
    }
  }

  function getChildren(parent) {
    for (var child in parent) {
      //console.log(child);
      array.push("<li>" + child + "<ul>");
      printList(parent[child]);
      array.push("</ul></li>");
    }
  }
  function printArray(myArray) {
    for (var i = 0; i < myArray.length; i++) {
      //console.log(myArray[i]);
      array.push("<li>" + myArray[i] + "</li>");
    }
  }
  printList(allData);
  array.push("<ul>");
  data.innerHTML = array.join("");
  //printList("string");
  console.log(array);
}
