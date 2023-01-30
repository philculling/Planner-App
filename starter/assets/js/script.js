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
  //Both return 24 hour clock which is helpful.
 //test code
 if (moment().hour() === 10) {
  console.log("I can use this now")
 }
 if (moment().hour() < 11) {
  console.log("Now I need to work out how to link this to the data attributes")
 }

 var allTextAreas = $('.col-8');//to target all middle columns
 allTextAreas.text("Test");

 $('#container')
.children('div')
.children('textarea')
.css('border-radius', '.4rem');//that was a test, you will probably want to change it

for (i = 0; i < allTextAreas.length; i++) {
  allTextAreas.text("Test2");//that worked so loop syntax is ok
  /*This needs to be finished to create a loop and inner if
  statement that iterates through and makes a comparison with the 
  moment get hour thing.
  */
   }

   //var testEl = document.querySelectorAll('[data-hour="9"]');
   //testEl[0].innerHTML = "Does this target the correct row(s)?";//yes,
   //so why can't I add text / change style, etc.
   //Surely testEl can now be manipulated?
   //try by id, just for 9 a.m.
   var testEl = $('#9');
   testEl.css('background-color', 'red');

/*
Lines 94 and 95 above would successfully change the inner html for the whole row.
But I struggled to change anything else so switched to trying with ids 
instead of data attributes.
Keep only trying really simple things.

TUESDAY:
 Give all the relevant divs a default class of green.
 Add something to the css to make the class of green
 have background-color green!
 They should all go green. Test them.
 Add ids to every row, like you did for data hour.
 Add something to the css to make the class of grey
 have background-color grey.
 Even though none of them have a class of grey at the moment.
 
All that is entirely separate from targeting by data-hour which
you're temporarily giving up on.

Now look up parse, cos you're going to be tracking by the ids which are strings.

I DO NOT UNDERSTAND THIS PARAGRAPH. IGNORE FOR NOW BUT DON'T DELETE.
Access the data attributes you've already set up by using
jQuery equivalent of document.getElement methods to save those
divs to a variable, as in something like:
var targetDivs = document.getElement by class / jQuery equiv.

When you have worked out how to target by data-hour or id,
 you can change the default green to grey or red as required:

 Create variable to have value of each data state (each hour) CHANGE ALL
 THIS - NOW TRYING WITH IDs??
var state = allTextAreas.getAttribute("data-hour"); but parsed - parseInt() 
to turn it into an integer. Link in slack AskBCS from Sunday.
  if state === moment().hour(), make the area red
  if state < moment().hour(), make the areas grey
  else make the areas green / do nothing (because they already are green)
 }
 and I would think that the above 5 lines go into the for loop you started.
 */
 /*
For changing style, check W7D1A1 or W7D1A7.
 */
 