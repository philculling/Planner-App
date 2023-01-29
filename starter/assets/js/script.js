  console.log (1 + 2);//test all linked ok, works

  var today = moment();
  $("#currentDay").text(today.format("dddd MMMM Do"));

  function setItems() {
    localStorage.setItem("userEntry9am", text9amEl.val());
    localStorage.setItem("userEntry10am", text10amEl.val());
    localStorage.setItem("userEntry11am", text11amEl.val());
    localStorage.setItem("userEntry12pm", text12pmEl.val());
    localStorage.setItem("userEntry1pm", text1pmEl.val());
    localStorage.setItem("userEntry2pm", text2pmEl.val());
    localStorage.setItem("userEntry3pm", text3pmEl.val());
    localStorage.setItem("userEntry4pm", text4pmEl.val());
    localStorage.setItem("userEntry5pm", text5pmEl.val());
  }
  //works, showing in console in local storage

  var clickableEl = $(".clickable");
  //link variables to ids in html
  var text9amEl = $("#entry9am");
  var text10amEl = $("entry10am");
  //remember to check they have ids in the html!
  
  var prevEntry9am = localStorage.getItem("userEntry9am");
  console.log(prevEntry9am);//Test, works

  function getItems() {
    if (prevEntry9am === "") {
      return;
    }
    else {
      text9amEl.text(prevEntry9am);
    }
  }

  clickableEl.on('click', function() {
    console.log("Test");
    console.log("This should show the diary entry put in for 9 a.m. ", text9amEl.val());
    setItems();
  });

  getItems();