//Display date and time in header
var update = function() {
    document.getElementById("time-display")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);

// DOM Elements
var projectFormEl = $("#project-form");
var activityNameEL = $(".activity-name-input");
var activityTypeEl = $(".activity-type-input");
var allocatedTimeEl = $(".allocated-time-input");
var dueDateEl = $(".due-date-input");
var closeFormEl = $(".closeBtn");
var submitFormEl = $(".submitBtn");
// var deleteActivity = $("")