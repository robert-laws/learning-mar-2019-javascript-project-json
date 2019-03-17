// var xhr = new XMLHttpRequest();
// xhr.open("GET", "assets/data/team-members.json", true);
// xhr.responseType = 'text';
// xhr.send();

// xhr.onreadystatechange = function() {
//   console.log(xhr.readyState);
//   console.log(xhr.status);
//   console.log(xhr.statusText);
// }

// xhr.onload = function() {
//   if(xhr.status === 200) {
//     var myData = JSON.parse(xhr.responseText);
//     console.log(myData);
//   }
// }

var xhr = new XMLHttpRequest();
xhr.open("GET", "assets/data/team-members.json", true);
xhr.responseType = "text"
xhr.onload = function() {
  if(xhr.status === 200) {
    var myData = JSON.parse(xhr.responseText);
    console.log(myData);
  }
}
xhr.send();