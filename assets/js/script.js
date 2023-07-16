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

    $(document).ready(function(){
      let jsonData;
      let data;
      let textAreaEl = $('#hour-9').children('.description');
      textAreaEl.val(localStorage.getItem('9AM'));
      $('#hour-9').children('.saveBtn').click(function() {
        var eventInfo = $.trim($('#hour-9').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('9AM', jsonData);
          }
        });
        textAreaEl = $('#hour-10').children('.description');
      textAreaEl.val(localStorage.getItem('10AM'));
      $('#hour-10').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-10').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('10AM', jsonData);
          }
        });
        textAreaEl = $('#hour-11').children('.description');
      textAreaEl.val(localStorage.getItem('11AM'));
      $('#hour-11').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-11').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('11AM', jsonData);
          }
        });
        textAreaEl = $('#hour-12').children('.description');
      textAreaEl.val(localStorage.getItem('12PM'));
      $('#hour-12').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-12').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('12PM', jsonData);
          }
        });
        textAreaEl = $('#hour-13').children('.description');
      textAreaEl.val(localStorage.getItem('1PM'));
      $('#hour-13').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-13').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('1PM', jsonData);
          }
        });
        textAreaEl = $('#hour-14').children('.description');
      textAreaEl.val(localStorage.getItem('2PM'));
      $('#hour-14').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-14').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('2PM', jsonData);
          }
        });
        textAreaEl = $('#hour-15').children('.description');
      textAreaEl.val(localStorage.getItem('3PM'));
      $('#hour-15').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-15').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('3PM', jsonData);
          }
        });
        textAreaEl = $('#hour-16').children('.description');
      textAreaEl.val(localStorage.getItem('4PM'));
      $('#hour-16').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-16').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('4PM', jsonData);
          }
        });
        textAreaEl = $('#hour-17').children('.description');
      textAreaEl.val(localStorage.getItem('5PM'));
      $('#hour-17').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-17').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('5PM', jsonData);
          }
        });
      });
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

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));
});
