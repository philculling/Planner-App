# Planner-App
Week 7 Challenge

Add the time to the header, there's an id of currentDay you can already use:
- create variable that targets id currentDay
- add text content to that variable that is current day - see Thursday activity 5 or 6.
- no need to append, it already exists?
This is about the only thing I feel vaguely confident about, and I'm not even sure about that!

Add a table with 3 columns and 9 rows? Use the link Laura sent you to use Bootstrap grids (think week 3). Do this first as it's what you're most likely to need help with!

Add simple text to the LH columns for the hours.
Add a data-attribute to each ROW which tells you the hour the row represents. You can do this directly in the html.

Make the middle columns something you can input into. Look up textareas.

Add "Save", or an image as in the demo, to the RH columns.

Add an eventListener to the RH columns you can click on to save. The on click will call a function.

Create function that saves the user input to the page and to local storage.

Explore get hour (I think!) from what Anthony showed us from the documentation on moment to work out how to link the real time to the numbers displayed in the LH column,
Then work out a way, probably using an if statement, of making past hours grey, current hour red and future hours green.
But how do we link that with simple text?

Persist events between renders of a page? Make sure that on refresh, it doesn't completely refresh but retrieves from local storage. Refer to week 6 day 3.