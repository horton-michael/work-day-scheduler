// DOM ELEMENTS ---------------------------------------------------------------
var currentDayEl = $("#currentDay");
var timeBlocksEl = $(".time-block");
var saveBtnEl = $(".saveBtn");
var descriptionEl = $(".description");
// DATA ----------------------------------------------------------------------
var today = dayjs().format("dddd, MMMM D");
var currentTime = dayjs().hour();
// FUNCTIONS -----------------------------------------------------------------
$(function () {
  function renderLastRegistered() {
    for (var i = 9; i <= 17; i++) {
      var timeBlockValue = localStorage.getItem("hour-" + i);
      var descriptionEl = $("#hour-" + i).find(".description");

      if (timeBlockValue) {
        descriptionEl.val(timeBlockValue);
      }
    }
  }

  saveBtnEl.on("click", function (event) {
    event.preventDefault();
    console.log("Save button clicked!");
    // get the id of the time block that the save button was clicked in
    var timeBlockId = $(this).closest(".time-block").attr("id");
    // get the user input
    var userInput = $(this).siblings(".description").val();
    // save the hour and user input in local storage
    console.log(userInput);
    console.log(timeBlockId);
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
  currentDayEl.text(today);
  renderLastRegistered();
});
