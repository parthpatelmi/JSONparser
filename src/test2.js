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
  // let final = JSON.parse(str);
  // console.log(Object.entries(final));
  let final = jsonToHtmlList(str);
  console.log(str);
  console.log(final);
  data.appendChild(final);
  function jsonToHtmlList(json) {
    return objToHtmlList(JSON.parse(json));
  }

  function objToHtmlList(obj) {
    if (obj instanceof Array) {
      var ol = document.createElement("ol");
      for (var child in obj) {
        var li = document.createElement("li");
        li.appendChild(objToHtmlList(obj[child]));
        ol.appendChild(li);
      }
      return ol;
    } else if (obj instanceof Object && !(obj instanceof String)) {
      var ul = document.createElement("ul");
      for (var child in obj) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(child + ": "));
        li.appendChild(objToHtmlList(obj[child]));
        ul.appendChild(li);
      }
      return ul;
    } else {
      return document.createTextNode(obj);
    }
  }

  //   function recurse(obj) {
  //       for ( var key in obj ) { // works for objects and arrays
  //        let arr = Object.entries(obj);
  //         console.log(arr)
  //         var item = obj[key];
  //         if ( typeof item === "object" )
  //           recurse(item);
  //         else
  //           dosomethingwith( key, item );
  //       }
  //     }
  // }
}
