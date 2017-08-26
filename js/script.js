$(document).ready(function() {
  generateQuoteAndTweet();

  $("#new-quote-btn").on("click", function() {
    generateQuoteAndTweet();
  });
});

function generateQuoteAndTweet() {
  $.getJSON("https://talaikis.com/api/quotes/random/", function(json) {

    //First I make the quote appear
    let html = '"' + json.quote + '"' + "<br>" + json.author;

    $("#quote-container").animate({opacity:"0"}, 500);
    setTimeout(function() {

      $("#quote-container").html(html);
      
    }, 500);
    $("#quote-container").animate({opacity:"1"}, 500);

    //Then we change the tweet-url
    $("#twitter-share-btn").attr("href", 'https://twitter.com/intent/tweet?text=' + '"' + json.quote + '" ' + json.author);
  });
}
