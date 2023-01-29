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
  //want to check difference between hour and hours
  //might become clear after 1 pm!
 //test code
 if (moment().hour() === 10) {
  console.log("I can use this now")
 }
 if (moment().hour() < 11) {
  console.log("Now I need to work out how to link this to the data attributes")
 }

 /*
 Pseudo first draft attempt to clarify logic
Be encouraged that the above if statements work. The console log messages
disappeared after 11 a.m.!

Before the below, maybe try something much simpler, not involving any 
comparisons or if statements, maybe just target ONE of the datasets

Perhaps...
Create a variable that targets ALL of the middle columns.
Create a for loop that changes ALL of them (to test them), 
like W6D1A5
If that has worked, insert into your for loop 
an if statement something like this:

if (moment().hour() === value of dataset HOW TO DO THIS BIT?
check the activity where he changed from stills to gifs
) {
  then make that row red NEED DETAIL this could be 
  setAttribute or the jQuery equiv W6D1A8 last 4 lines of code 
  might be useful
  W6D2A9&10 might be helpful here, though it's JavaScript not jQuery.
W7D1A1 might help and IS jQuery.
W7D1A7 might help
}
else if (moment().hour() > value of dataset HOW TO DO THIS BIT?) {
  then make those rows grey
}
else make those rows green

 */
 