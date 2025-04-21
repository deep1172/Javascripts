let bgcolor = null;
const body = document.querySelector(".body")

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

document.querySelector("#stop").addEventListener("click", ()=> {

   clearInterval(bgcolor);
   bgcolor= null;
   console.log("Stopped");
});


document.querySelector("#start").addEventListener("click", () => {
   if (bgcolor !== null) return;
   
   bgcolor = setInterval(()=> {
      document.body.style.backgroundColor =getRandomColor();
   }, 1000);   

console.log(bgcolor);
   });
 