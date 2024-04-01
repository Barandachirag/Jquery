    
function updateClock() {
    
    currentTime = new Date();

  
    hours = currentTime.getHours();
    minutes = currentTime.getMinutes();
    seconds = currentTime.getSeconds();

  
   meridiem = (hours >= 12) ? "PM" : "AM";
   hours = (hours > 12) ? hours - 12 : hours;
   hours = (hours == 0) ? 12 : hours;

  
   hours = (hours < 10) ? '0' + hours : hours;
   minutes = (minutes < 10) ? '0' + minutes : minutes;
   seconds = (seconds < 10) ? '0' + seconds : seconds;

   
    days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    day = days[currentTime.getDay()];
    date = currentTime.getDate();

   
    months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    month = months[currentTime.getMonth()];

   
    year = currentTime.getFullYear();

   
   document.getElementById('date').innerHTML = day + ', ' + date + ' ' + month + ' ' + year;
   document.getElementById('time').innerHTML = hours + ':' + minutes + ':' + seconds + ' ' + meridiem;
}


setInterval(updateClock, 1000);


updateClock();