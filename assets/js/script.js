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
      textAreaEl.val(JSON.parse(localStorage.getItem('9AM')));
      $('#hour-9').children('.saveBtn').click(function() {
        var eventInfo = $.trim($('#hour-9').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('9AM', jsonData);
          }
        });
        textAreaEl = $('#hour-10').children('.description');
      textAreaEl.val(JSON.parse(localStorage.getItem('10AM')));
      $('#hour-10').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-10').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('10AM', jsonData);
          }
        });
        textAreaEl = $('#hour-11').children('.description');
      textAreaEl.val(JSON.parse(localStorage.getItem('11AM')));
      $('#hour-11').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-11').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('11AM', jsonData);
          }
        });
        textAreaEl = $('#hour-12').children('.description');
      textAreaEl.val(JSON.parse(localStorage.getItem('12PM')));
      $('#hour-12').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-12').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('12PM', jsonData);
          }
        });
        textAreaEl = $('#hour-13').children('.description');
      textAreaEl.val(JSON.parse(localStorage.getItem('1PM')));
      $('#hour-13').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-13').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('1PM', jsonData);
          }
        });
        textAreaEl = $('#hour-14').children('.description');
      textAreaEl.val(JSON.parse(localStorage.getItem('2PM')));
      $('#hour-14').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-14').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('2PM', jsonData);
          }
        });
        textAreaEl = $('#hour-15').children('.description');
      textAreaEl.val(JSON.parse(localStorage.getItem('3PM')));
      $('#hour-15').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-15').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('3PM', jsonData);
          }
        });
        textAreaEl = $('#hour-16').children('.description');
      textAreaEl.val(JSON.parse(localStorage.getItem('4PM')));
      $('#hour-16').children('.saveBtn').click(function() {
        eventInfo = $.trim($('#hour-16').children('.description').val());
        if (eventInfo !== '') {
          data = { eventInfo };
          jsonData = JSON.stringify(eventInfo);
          localStorage.setItem('4PM', jsonData);
          }
        });
        textAreaEl = $('#hour-17').children('.description');
      textAreaEl.val(JSON.parse(localStorage.getItem('5PM')));
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


$(document).ready(function () {

  let currentHour = dayjs().format('H');
  console.log(currentHour);
  var numeric = 'hour-9'.split('-')[1];
          var value9 = parseInt(numeric);
          console.log(value9);
          
          if (value9 < currentHour) {
            $('#hour-9').children('.description').addClass('past');
          } else if (value9 == currentHour) {
            $('#hour-9').children('.description').addClass('present');
          } else if (value9 > currentHour) {
            $('#hour-9').children('.description').addClass('future');
          }

      numeric = 'hour-10'.split('-')[1];
          var value10 = parseInt(numeric);
          console.log(value10);
          
          if (value10 < currentHour) {
            $('#hour-10').children('.description').addClass('past');
          } else if (value10 == currentHour) {
            $('#hour-10').children('.description').addClass('present');
          } else if (value10 > currentHour) {
            $('#hour-10').children('.description').addClass('future');
          }

      numeric = 'hour-11'.split('-')[1];
          var value11 = parseInt(numeric);
          console.log(value11);
          
          if (value11 < currentHour) {
            $('#hour-11').children('.description').addClass('past');
          } else if (value11 == currentHour) {
            $('#hour-11').children('.description').addClass('present');
          } else if (value11 > currentHour) {
            $('#hour-11').children('.description').addClass('future');
          }

      numeric = 'hour-12'.split('-')[1];
          var value12 = parseInt(numeric);
          console.log(value12);
          
          if (value12 < currentHour) {
            $('#hour-12').children('.description').addClass('past');
          } else if (value12 == currentHour) {
            $('#hour-12').children('.description').addClass('present');
          } else if (value12 > currentHour) {
            $('#hour-12').children('.description').addClass('future');
          }

      numeric = 'hour-13'.split('-')[1];
          var value13 = parseInt(numeric);
          console.log(value13);
          
          if (value13 < currentHour) {
            $('#hour-13').children('.description').addClass('past');
          } else if (value13 == currentHour) {
            $('#hour-13').children('.description').addClass('present');
          } else if (value13 > currentHour) {
            $('#hour-13').children('.description').addClass('future');
          }

      numeric = 'hour-14'.split('-')[1];
          var value14 = parseInt(numeric);
          console.log(value14);
          
          if (value14 < currentHour) {
            $('#hour-14').children('.description').addClass('past');
          } else if (value14 == currentHour) {
            $('#hour-14').children('.description').addClass('present');
          } else if (value14 > currentHour) {
            $('#hour-14').children('.description').addClass('future');
          }

      numeric = 'hour-15'.split('-')[1];
          var value15 = parseInt(numeric);
          console.log(value15);
          
          if (value15 < currentHour) {
            $('#hour-15').children('.description').addClass('past');
          } else if (value15 == currentHour) {
            $('#hour-15').children('.description').addClass('present');
          } else if (value15 > currentHour) {
            $('#hour-15').children('.description').addClass('future');
          }

      numeric = 'hour-16'.split('-')[1];
          var value16 = parseInt(numeric);
          console.log(value16);
          
          if (value16 < currentHour) {
            $('#hour-16').children('.description').addClass('past');
          } else if (value16 == currentHour) {
            $('#hour-16').children('.description').addClass('present');
          } else if (value16 > currentHour) {
            $('#hour-16').children('.description').addClass('future');
          }

      numeric = 'hour-17'.split('-')[1];
          var value17 = parseInt(numeric);
          console.log(value17);
          
          if (value17 < currentHour) {
            $('#hour-17').children('.description').addClass('past');
          } else if (value17 == currentHour) {
            $('#hour-17').children('.description').addClass('present');
          } else if (value17 > currentHour) {
            $('#hour-17').children('.description').addClass('future');
          }

  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'));
});
