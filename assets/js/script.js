// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var hoursInfo = [
  {hourId: 'hour-9', hourText: '9AM'},
  {hourId: 'hour-10', hourText: '10AM'},
  {hourId: 'hour-11', hourText: '11AM'},
  {hourId: 'hour-12', hourText: '12PM'},
  {hourId: 'hour-13', hourText: '1PM'},
  {hourId: 'hour-14', hourText: '2PM'},
  {hourId: 'hour-15', hourText: '3PM'},
  {hourId: 'hour-16', hourText: '4PM'},
  {hourId: 'hour-17', hourText: '5PM'},
];

var listRoot = $('#listRoot');

hoursInfo.forEach(function(info) {
  var div = $('<div>').attr('id', info.hourId).addClass('row time-block');
  var hourDiv = $('<div>').addClass('col-2 col-md-1 hour text-center py-3').text(info.hourText);
  var textArea = $('<textarea>').addClass('col-8 col-md-10 description').attr('rows','3');
  var button = $('<button>').addClass('btn saveBtn col-2 col-md-1').attr('aria-label','save');
  var icon = $('<i>').addClass('fas fa-save').attr('aria-hidden','true');

  button.append(icon);
  div.append(hourDiv, textArea, button);
  listRoot.append(div);
});



$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
