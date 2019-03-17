var arrayParagraph = document.querySelector("#json-two");

var xhr2 = new XMLHttpRequest();
xhr2.open("GET", "assets/data/team-advanced.json", true);
xhr2.responseType = "text";
xhr2.onload = function() {
  if(xhr2.status === 200) {
    var items = JSON.parse(xhr2.responseText);
    console.log(items);

    arrayParagraph.innerHTML = items[1].first;
  }
}
xhr2.send();

var companyArray = document.querySelector("#json-three");

var companies = new XMLHttpRequest();
companies.open("GET", "assets/data/complex-data.json");
companies.responseType = "text";
companies.onload = function() {
  if(companies.status === 200) {
    var result = JSON.parse(companies.responseText);
    console.log(result);

    for(i = 0; i < result.company.length; i++) {
      console.log(result.company[i].name);
      companyArray.innerHTML += "<strong>Company Name</strong>: " + result.company[i].name + ", <strong>Manager</strong>: " + result.manager[i].first_name + "<br>";
    }
  }
}
companies.send();