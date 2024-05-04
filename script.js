function updateTime() {
    var now = new Date();
    var day = now.getDate();
    var month = now.getMonth() + 1;
    var year = now.getFullYear();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Formatting to add leading zeros if needed
    day = (day < 10) ? '0' + day : day;
    month = (month < 10) ? '0' + month : month;
    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
  
    var dateDisplay = document.getElementById('date');
    dateDisplay.textContent = day + '/' + month + '/' + year;
  
    var timeDisplay = document.getElementById('time');
    timeDisplay.textContent = hours + ':' + minutes + ':' + seconds;
  
    setTimeout(updateTime, 1000); // Update every second
  }
  
  updateTime();