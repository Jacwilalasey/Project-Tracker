//Display date and time in header
var update = function() {
    document.getElementById("time-display")
    .innerHTML = moment().format('MMMM Do YYYY, h:mm:ss a');
}
setInterval(update, 1000);