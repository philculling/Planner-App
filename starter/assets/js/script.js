  console.log (1 + 2);//this works

  var today = moment();
  $("#currentDay").text(today.format("dddd MMMM Do"));

  function getItems() {
    //to be completed
  }

  function setItems() {
    //to be completed
  }

  var clickableEl = $(".clickable");
  var text9amEl = $("#entry9am");//text9amEl linked to id entry9am
  //which is what the user has created

  clickableEl.on('click', function() {
    console.log("Test");
    setItems();
    //complete rest later, though that may actually be it?
  });

  console.log("This should show the diary entry put in for 9 a.m. ", text9amEl.val());

/*
  This console log is not testable until you finish 
  writing the function at line 18
  */