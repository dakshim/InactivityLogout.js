const inActivityInMiliseconds = 6000;
let inActivityTimer;

/***
 * Set timeout incase there is inactivity
 **/
function startTimer() {

    // window.setTimeout returns an Id that can be used to start and stop a timer
       inActivityTimer = window.setTimeout(function(){inactivityDetected()
    }, inActivityInMiliseconds)
}


/***
 * Clears resetTimer 
 **/
function resetTimer() {
    window.clearTimeout(inActivityTimer);
    startTimer();
}

/***
 * In case of inactivity trigger inactivityDetected or reload page, it will then go through laravel middleware
 **/
function inactivityDetected() {
    location.reload();
}


/***
 * If an activity such as mouse, touch or keyboard etc is detected then trigger resetTimer else startTimer
 **/
function init() {
    document.addEventListener("mousemove", resetTimer, false);
    document.addEventListener("mousedown", resetTimer, false);
    document.addEventListener("keypress", resetTimer, false);
    document.addEventListener("touchmove", resetTimer, false);
    startTimer();
}

$(document).ready(function(){
    init();
});
