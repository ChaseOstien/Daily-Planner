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

  

  hoursInfo.forEach(function(i) {  
    let jsonData;
      let data;
      let textAreaEl = $('#' + i.hourId).children('.description');
      textAreaEl.val(JSON.parse(localStorage.getItem(i.hourText)));
      $('#' + i.hourId).children('.saveBtn').click(function() {
        var eventInfo = $.trim($('#' + i.hourId).children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem(i.hourText, jsonData);
          }
        });
      });
  });
});


$(document).ready(function () {

hoursInfo.forEach(function(j) {
  let currentHour = dayjs().format('H');
  var numeric = j.hourId.split('-')[1];
          var value = parseInt(numeric);
          
          if (value < currentHour) {
            $('#' + j.hourId).children('.description').addClass('past');
          } else if (value == currentHour) {
            $('#' + j.hourId).children('.description').addClass('present');
          } else if (value > currentHour) {
            $('#' + j.hourId).children('.description').addClass('future');
          }
        });

  var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMMM D'));
});
