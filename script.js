function updateClock() {
    let current = new Date();
    
    let hours = current.getHours();
    let minutes = String(current.getMinutes()).padStart(2, '0');
    let seconds = String(current.getSeconds()).padStart(2, '0');
    let period = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12 || 12;

    let timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Update the clock display
    document.getElementById("hrs").innerHTML = String(hours).padStart(2, '0');
    document.getElementById("mins").innerHTML = minutes;
    document.getElementById("sec").innerHTML = seconds;
    document.getElementById("timezone").innerHTML = timezone;

    // Update AM/PM next to seconds
    let periodElem = document.getElementById("period");
    periodElem.innerHTML = period;

    // Add the class based on AM/PM
    if (period === 'AM') {
        periodElem.classList.add('AM');
        periodElem.classList.remove('PM');
    } else {
        periodElem.classList.add('PM');
        periodElem.classList.remove('AM');
    }
}

updateClock();
setInterval(updateClock, 1000);
