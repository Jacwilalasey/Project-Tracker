//Display date and time in header
var update = function() {
    document.getElementById("time-display")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

// DOM Elements
var activityModalEl = $("#activity-modal");
var activityDisplayEl = $("#activity-display")
var activityFormEl = $("#activityForm")
var activityNameEL = $("#activity-name-input");
var activityTypeEl = $("#activity-type-input");
var allocatedTimeEl = $("#allocated-time-input");
var dueDateEl = $("#due-date-input");
var closeFormEl = $("#closeBtn");
var submitFormEl = $("#submitBtn");
// var deleteActivity = $("")

// print activity data to the page
function printActivityData(name, type, time, date) {
    var activityRowEl = $('<tr>');

    var activityNameTd = $('<td>').addClass('p-2').text(name);
    var activityTypeTd = $('<td>').addClass('p-2').text(type);
    var activityTimeTd = $('<td>').addClass('p-2').text(time);
    var activityDateTd = $('<td>').addClass('p-2').text(date);
    var daysToDateTd = moment(date, 'DD/MM/YY').diff(moment(), 'days');
    var dayLeftTd = $('<td>').addClass('p-2').text(daysToDateTd);
    var deleteActivityBtn = $('<td>').addClass('p-2 delete-activity-btn text-center')
    .button('Remove');

    activityRowEl.append(
        activityNameTd,
        activityTypeTd,
        activityTimeTd,
        activityDateTd,
        daysToDateTd,
        dayLeftTd,
        deleteActivityBtn
    );

    activityDisplayEl.append(activityRowEl);

    activityModalEl.modal('hide');
};

//delete row
function deleteActivity(event) {
    console.log(event.target);
    var btnClicked = $(event.target);
    btnClicked.parent('tr').remove();
  }

  //form submission
  function submitActivity(event) {
    event.preventDefault();

    var activityName = activityNameEl.val().trim();
    var activityType = activityTypeEl.val().trim();
    var activityTime = allocatedTimeEl.val().trim();
    var activityDate = dueDateEl.val().trim();

    printActivityData(activityName, activityType, activityTime, activityDate);

    activityFormEl[0].reset();
  }

activityFormEl.on('submit', submitActivity);
activityDisplayEl.on('click', '.delete-activity-btn', deleteActivity);

