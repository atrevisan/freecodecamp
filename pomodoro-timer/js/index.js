var timerSet = false;
var timerId;

String.prototype.format = function() {
    var s = this,
        i = arguments.length;

    while (i--)  {
      
        s = s.replace(new RegExp('\\{' + i + '\\}', 'gm'), arguments[i]);
    }
    return s;
};

$(document).ready(function() {
  $( ".session-length-button" ).click(function() {
    if(!timerSet)
      handleMathButtonEvent("#session-length", $(this));    
  });
  
  $( ".break-length-button" ).click(function() {
    if(!timerSet)
      handleMathButtonEvent("#break-length", $(this));    
  });
  
  $("#clock-button").click(function() {
    
    if (!timerSet) {
      setTimer("#clock-timer");
      timerSet = true;
      
    } else {
      timerSet = false;
      clearInterval(timerId);
    }
  });
});

function setTimer(timeContainer) {
  
      var timeArray = $(timeContainer).text().split(":");
      var timePeriodMilis;      
  
      if (timeArray.length > 1) {
            timePeriodMilis = 
                              (parseInt(timeArray[0], 10) * 60 * 1000) + //minutes 
                              (parseInt(timeArray[1], 10) * 1000); // seconds  
      } else {
        timePeriodMilis = parseInt(timeArray[0], 10) * 60 * 1000;
      }
      var targetTime = new Date();
      var nowMilis = new Date().getTime();
  
      targetTime.setTime(nowMilis + timePeriodMilis);
      
      timerId = setInterval(function() {

          var currentTime = new Date().getTime();
          var secondsLeft = (targetTime - currentTime) / 1000;
          
          var minutes, seconds;
          minutes = Number(parseInt(secondsLeft / 60));
          seconds = Number(parseInt(secondsLeft % 60));
          
          if (seconds <= 9)
            seconds = "0" + seconds;
          if (minutes <= 9)
            minutes = "0" + minutes;
        
          var currentTime = "{0}:{1}".format(minutes, seconds);
          $("#clock-timer").text(currentTime);
        
          if(currentTime === "00:00") {
            clearInterval(timerId);
            
            var clockText = $("#clock-text");
            var clockTimer = $("#clock-timer");
            
            if (clockText.text() !== "Break") {
 
              clockText.text("Break");
              setTimer("#break-length");
            } else {
              clockText.text("Session");
              clockTimer.text("25");
              timerSet = false;
            }
          }
        
      }, 1000);
}

function handleMathButtonEvent(id, mathButton) {
  
    var sessionText = $(id);
    var sessionLength = Number(sessionText.text());
    
    var pomodoroSessionText = $("#clock-timer");
    
    if (mathButton.is(".glyphicon-plus")) {
        sessionLength++;

    } else {
        sessionLength--;
    }
    
    if(sessionLength >= 1 && sessionLength <= 59) {
      sessionText.text(sessionLength);
      if (id === "#session-length") // updates ponodoro only if session length modified
        pomodoroSessionText.text(sessionLength);
    }
}