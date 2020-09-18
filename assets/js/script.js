var hours = ["9", "10", "11" ,"12","13", "14", "15", "16", "17"]


// today's date
var today = moment(new Date()).format("dddd, MMMM Do ")
$("#currentDay").text(today);

function renderCalendar(){

//get current hour and compare to calendar to set color attribute
var currentHour = "";
var currentHour = moment(new Date()).format("HH") 

// set background colors for calendar - green is future hour, red is current hour, gray is hour in the past

for(var i = 0; i < hours.length; i++) {
    
    currentHour = "12"
    var hourId = "#hour-" + hours[i];

    if (currentHour < hours[i]) {
        // $(hourId).removeClass();
        $(hourId).addClass("future"); 
    } else if (currentHour > hours[i]) {
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

    // start countdown
    // create variable to keep track of the time
    secondsLeft = 60;
    var timerInterval = setInterval(function() {
      if (secondsLeft > 0) {
      
      
      // decrement time remaining
      secondsLeft--;
  
      // update the count down
      timeEl.innerHTML = secondsLeft + " seconds left";
  
      } else {
      // check if time has run out
      
        // the clearInterval method.
        clearInterval(timerInterval);
        alert("game over");
        // when the user returns to the page
        localStorage.setItem("count", totalCorrect);
        //display score
      }
  
    }, 15000);    
    
    



$(".btn").on("click", function () {
    // alert($(this).val(".description"))
    var char = $(this).val();
    
});



setTime()
renderCalendar()
