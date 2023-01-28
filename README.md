# Planner-App
Week 7 Challenge

Sunday morning: revise week 6 work in preparation for tutor meeting, not necessarily for the whole morning.
Sunday afternoon: 1:30 LFC. Continue coding while watching.
Don't get bogged down in week 6 work, continue with this.
Monday evening: speak to Rebecca.

This whole section is to create a function that saves the user input from the middle columns to local storage.

Back to basics:
Work out how to save the user's input using .val; I think I have set this up correctly using text9amEl.val
Work out how to save that user's input to local storage
Finish this, ask BCS if I'm right and how to test it.

Write the function to send to local storage. See W6D3A1 and A2

Write a function that will retrieve from local storage and put back in the right place. You will need to have something like you had in last week's challenge so that it doesn't get confused when it's empty. Putting in the right place will be challenging.

One possibility that's a bit long winded but might work:
Create 9 ids for all 9 user inputs. Test with 1 as less confusing and less to undo.
Create 9 variables to target all 9 user inputs.
Complete the event listener you started earlier. Surely all you want it to do is to call the send to local storage function. Just make sure the send to local storage function sends everything to local storage.

If you ever get this working for 9 a.m., repeat for other parts of the day. You did / will need to:
- add id to remaining 8 text areas
- create variable for remaining 8 text areas
- check the functions are still ok.

TCS piece 3.

Read through the documentation Anthony sent, specifically on get hour (I think).
Work out how to link the real time to the rows. You have given the rows dataset values, so you could use these.
Work out a way, possibly, but not definitely, using an if statement, of making past hours grey, current hour red and future hours green.

Screenshot
READ ME copy from previous, edit.
READ ME screenshot.

Further styling of the diary entry table. Can it look nicer with borders, etc.?
If you've set up the data attributes correctly, you can target them in the CSS.

Add some sort of hover effect on the save area so that it will be clearer for the user when they have saved.