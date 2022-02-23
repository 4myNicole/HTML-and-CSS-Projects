function countdown() {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000); //pausing for 1000 milliseconds (1 second)
        if(seconds == -1) {
            alert("Time's up!");
        }
    }
    tick();
}