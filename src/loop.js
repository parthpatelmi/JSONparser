import "./styles.css";

let input = document.getElementById("str");
let data = document.getElementById("data");
let error = document.getElementById("error");

input.oninput = () => validateJson();

// function fn() {
//   const str = input.value;
//   if (str === null || str === "" || str === undefined) {
//     data.innerHTML = `Please Enter valid JSON`;
//     data.style.color = "red";
//     return;
//   } else {
//     validateJson();
//   }
// }

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
  let obj = JSON.parse(str);
  data.innerHTML = recurse(obj);
  
  }
}
// if (typeof JSON.parse(str) === "object") {
//   // let final = JSON.stringify(JSON.parse(str), null, 2);
//   let final = JSON.parse(str);
//   for (let key in final) {
//     // console.log("value", final[key]);
//     // console.log(typeof final[key]);
//     let myUl = document.createElement("ul");
//     myUl.innerHTML = key + ":" + final[key];
//     data.innerHTML = key + ":" + final[key];
//     if (typeof final[key] === "object") {
//       for (let nestKey in final[key]) {
//         console.log("value", final[key][nestKey]);
//         let myDiv = final[key][nestKey];
//         let myLi = document.createElement("li");
//         // data.innerHTML += myLi.innerHTML = myDiv;
//       }
//     }

// data.innerHTML = `<pre>${key}</pre>`;
// error.innerHTML = `<pre>${final}</pre>`;
//     }
//     data.style.color = "green";
//     error.style.color = "green";
//   }
// }

// function recurse(obj) {
//   for ( var key in obj ) { // works for objects and arrays
//     var item = obj[key];
//     if ( typeof item === "object" )
//       recurse(item);
//     else
//       dosomethingwith( key, item );
//   }
// }
