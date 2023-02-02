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

  var clickableEl = $(".clickable");
  //link variables to ids in html
  var text9amEl = $("#entry9am");
  var text10amEl = $("#entry10am");
  var text11amEl = $("#entry11am");
  var text12pmEl = $("#entry12pm");
  var text1pmEl = $("#entry1pm");
  var text2pmEl = $("#entry2pm");
  var text3pmEl = $("#entry3pm");
  var text4pmEl = $("#entry4pm");
  var text5pmEl = $("#entry5pm");
  
  var prevEntry9am = localStorage.getItem("userEntry9am");
  console.log(prevEntry9am);//Test, works
  var prevEntry10am = localStorage.getItem("userEntry10am");
  var prevEntry11am = localStorage.getItem("userEntry11am");
  var prevEntry12pm = localStorage.getItem("userEntry12pm");
  var prevEntry1pm = localStorage.getItem("userEntry1pm");
  var prevEntry2pm = localStorage.getItem("userEntry2pm");
  var prevEntry3pm = localStorage.getItem("userEntry3pm");
  var prevEntry4pm = localStorage.getItem("userEntry4pm");
  var prevEntry5pm = localStorage.getItem("userEntry5pm");
  
  function getItems() {
     text9amEl.text(prevEntry9am);
     text10amEl.text(prevEntry10am);
     text11amEl.text(prevEntry11am);
     text12pmEl.text(prevEntry12pm);
     text1pmEl.text(prevEntry1pm);
     text2pmEl.text(prevEntry2pm);
     text3pmEl.text(prevEntry3pm);
     text4pmEl.text(prevEntry4pm);
     text5pmEl.text(prevEntry5pm);
    }

  clickableEl.on('click', function() {
    console.log("Test");
    console.log("This should show the diary entry put in for 9 a.m. ", text9amEl.val());
    setItems();
  });

  getItems();

  //Tests with moment.js
  moment().hour(Number);
  moment().hour();
  console.log(moment().hour());
  
  moment().hours(Number);
  moment().hours();
  console.log(moment().hours());
  console.log(JSON.parse(moment().hour()));//hoping this is right syntax?
  //All, including the JSON one, return 24 hour clock which is helpful.
 //test code
 if (moment().hour() === 10) {
  console.log("I can use this now")
 }
 if (moment().hour() < 11) {
  console.log("Now I need to work out how to link this to the data attributes")
 }
//end of test code

 $('#container')
.children('div')
.children('textarea')
.css('border-radius', '.4rem')
.css('margin', '20px');//that was a test, you will probably want to change it

$(".row").each(function(){
  var currentHour = parseInt(moment().hour());
  var rowHour = parseInt($(this).attr("data-hour"));
  console.log(rowHour);
  if (rowHour === currentHour) {
    $(this).addClass("present");
  }
  else if (rowHour > currentHour) {
    $(this).addClass("future");
  }
  else {
    $(this).addClass("past");
  }
})

  /*
  Commit
  Change content left in the boxes
  Tidy any notes you have in here
  Check html
  Check css
  Check Readme
  Move everything out of starter
  Switch to a different list because you're about to push
  Commit
  Push


  */ 