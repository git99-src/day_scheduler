var hours = ["9", "10", "11" ,"12","13", "14", "15", "16", "17"];
var timer;

// today's date
var today = moment(new Date()).format("dddd, MMMM Do ");

$("#currentDay").text(today);

function renderCalendar(){
     
    //get current hour and compare to calendar to set color attribute
    var currentHour = " ";
    var currentHour = moment(new Date()).format("HH") 

    // set background colors for calendar - green is future hour, red is current hour, gray is hour in the past
    for(var i = 0; i < hours.length; i++) {
         
    //set up variable for button
    var hourId = "#hour-" + hours[i];
      
        if (parseInt(currentHour) < parseInt(hours[i])) {
            // change class
            $(hourId).addClass("future"); 
        } else if (parseInt(currentHour) > parseInt(hours[i])) {
            // $(hourId).removeClass();
            $(hourId).addClass("past"); 

        } else { 
            // $(hourId).removeClass(); 
            $(hourId).addClass("present"); 
        }
    
    };
};
 
 // start time
 function setTime() {
   timer = setInterval(renderCalendar, 15000);
 }
// Set up the calendar appointments    
function setUpAppointments() {

    // get each row to update the text 
    $(".time-block").each(function() {

        // get id for this row
        var id = $(this).attr("id");
        var appointment = localStorage.getItem(id);

        // If I have an appointment in local storage - update calendar
        if (appointment !== null) {
            $(this).children(".description").val(appointment);
        };
    });

    };   
    // Save calendar appointment event
    $(document).on("click", ".saveBtn", function() {

        var calText = "";
        var stgID = "";
        // get the sibling value in text
        calText = $(this).prev().val();
        // get the id of the parent
        stgID = $(this).parent().attr("id");
        // update local storage
        localStorage.setItem(stgID, calText);
    });

setUpAppointments();
renderCalendar();
setTime();



