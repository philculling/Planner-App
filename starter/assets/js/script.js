  console.log (1 + 2);//this works

  var today = moment();
  $("#currentDay").text(today.format("dddd MMMM Do"));

  var clickableEl = $(".clickable");

  clickableEl.on('click', function() {
    console.log("Test");
  });