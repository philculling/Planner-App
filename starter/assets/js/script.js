  console.log (1 + 2);//this works

  // TODO: Select the existing DOM element, <div id="currentDay">, and assign to a new variable

  var currentDayEl = $('#currentDay');

  //var today = moment();
  //$("#currentDay").text(today.format("dddd MM Do"));//commented out as wasn't working

  // TODO: Create a `<p>` element that will store test content and assign that created element to a new variable
var todayEl = $('<p>');

// TODO: Add the following text to the newly created `<p>` element: "Second test"
todayEl.text("Second test");
currentDayEl.append(todayEl);