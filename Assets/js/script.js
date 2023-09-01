// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// DOM ELEMENTS ---------------------------------------------------------------
var currentDayEl = $("#currentDay");
var timeBlocksEl = $(".time-block");
var saveBtnEl = $(".saveBtn");
// DATA ----------------------------------------------------------------------
var today = dayjs().format("dddd, MMMM D");
var currentTime = dayjs().hour();
console.log(currentTime);
// FUNCTIONS -----------------------------------------------------------------
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  saveBtnEl.on("click", function (event) {
    event.preventDefault();
    // get the id of the time block that the save button was clicked in
    var timeBlockId = $(this).closest(".time-block").attr("id");
    // get the user input
    var userInput = $(this).siblings(".description").val();
    // save the hour and user input in local storage
    localStorage.setItem(timeBlockId, userInput);
  });
  // create conditional statement within for loop to determine if the time is past, present, or future
  for (var i = 9; i <= 17; i++) {
    var timeBlockEl = $("#hour-" + i);
    if (currentTime > i) {
      // if the time is past, add class "past"
      timeBlockEl.addClass("past").removeClass("present future");
    } else if (currentTime == i) {
      // if the time is present, add class "present"
      timeBlockEl.addClass("present").removeClass("past future");
    } else if (currentTime < i) {
      // if the time is future, add class "future"
      timeBlockEl.addClass("future").removeClass("past present");
    }
  }
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  currentDayEl.text(today);
});
// USER INTERACTIONS ---------------------------------------------------------

// INITIALIZATION -------------------------------------------------------------
