var theData1 = '{"first":"Hal", "last":"Hope", "city":"Portland"}';
var myObj = JSON.parse(theData1);
console.log(myObj);

var singleOne = document.querySelector("#single-level-one");

if(singleOne) {
  singleOne.innerHTML = myObj.first;
}

var theData2 = '{"Bob": {"age":"23", "degree":"MA"}, "Kal": {"age":"34", "degree":"MBA"}}';

var myObj2 = JSON.parse(theData2);

var doubleOne = document.querySelector("#double-level-one");

if(doubleOne) {
  doubleOne.innerHTML = myObj2.Kal.age;
}

var theData3 = '{"Bob": {"age":"23", "degree": {"BA":"UVA", "MA":"Cal Tech"}}, "Kal": {"age":"34", "degree":"MBA"}}';

var myObj3 = JSON.parse(theData3);

var tripleOne = document.querySelector("#triple-level-one");

if(tripleOne) {
  tripleOne.innerHTML = myObj3.Bob.degree.MA;
}