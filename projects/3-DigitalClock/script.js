
const myclock =document.getElementById("clock");


// setInterval(function (){
//     const now = new Date();
//   myclock.innerHTML =now.toLocaleTimeString();
// }, 1000)

function updateClock(){
    const now = new Date();
    const hours = now.getHours().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    
    myclock.textContent = timeString;
    myclock.style.backgroundColor = "orange"
  }

  // Initial call
  updateClock();

  // Update every second
  setInterval(updateClock, 1000);
