$(document).ready(function() {

  $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {

    let html = '"' + json.quote + '"' + "<br>" + json.author;

    $("#quote-container").html(html);
  });
});
