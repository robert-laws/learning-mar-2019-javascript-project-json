var name = document.querySelector("#ajax-name");

if(name) {
  $(document).ready(function() {
    $.getJSON("assets/data/locations-data.json", function (data) {
      var p = $("#ajax-data");
      data.forEach(function(elem) {
        p.append("<strong>Name:</strong> " + elem.name + "<br>");
        if(elem.manager) {
          p.append("<strong>Manager:</strong> " + elem.manager + "<br>");
        }
        p.append("<strong>Description:</strong> " + elem.description + "<br>");
        p.append("<strong>Breakfast</strong>: $" + elem.prices.breakfast + "<br>");
        p.append("<strong>Lunch</strong>: $" + elem.prices.lunch + "<br>");

        // console.log(elem.options);
        p.append("<strong>Food Options:</strong>")

        p.append("<ul>")
        elem.options.forEach(function(opt) {
          p.append("<li>" + opt + "</li>")
        })
        p.append("</ul>")

        if(elem.image) {
          p.append("<img src='images/" + elem.image + "' style='width: 300px;' />");
        }

        p.append("<hr>")
      })
    })
  })
}

$(document).ready(function() {
  $.getJSON("assets/data/locations-data.json", function(data) {
    var p = $("#ajax-data");
    data.forEach(function(elem) {
      console.log(elem.name);
    });
  });
});