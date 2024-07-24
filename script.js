// number of seconds that have passed
let time = 0;
// reference to the <span> containing the number
let counterElement = document.getElementById("time");

// Function to update the timer
function updateTimer() {
    // Increase elapsedTime by 1
    elapsedTime++;

    // Update the timer display in the HTML
    const timerElement = document.getElementById('time');
    timerElement.textContent = elapsedTime;
}

// Call updateTimer every 1000 milliseconds (1 second)
const intervalId = setInterval(updateTimer, 1000);
