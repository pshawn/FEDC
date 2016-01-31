var quotes = ["All I do is WIN, WIN, WIN no matter what", "Working all winter shining all summer", "Always have Faith. Always have Hope", "The key is to make it", "Key to more success is a clean heart and a clean face", "We go hard. In everything we do, we’re going to accomplish our victory and our goal.", "BLESS UP","If it takes a day, a year, or 20 years, we’re going to win. ","Baby, you smart! You loyal! You a genius!","Those that weather the storm are the great ones."];
$(document).ready(function() {

  // Only change code below this line.
  $("#srch").on("click", function() {
    console.log("we in here");
    $("#here").html(quotes[Math.floor(Math.random() * quotes.length)]);
     $("#vid")[0].src += "&autoplay=1";
    ev.preventDefault();

  });
  // https://youtu.be/aBQDcCReZvM
});