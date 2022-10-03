let bgmove = null;
const backg = document.getElementById("scrollx");   
let posit = 0;
let n = 10;
bgmove = setInterval(frame, n);
function frame() {
    if (posit == -4795) {
      posit = 0;
    } else {
      posit--;  
      backg.style.left = posit + "px"; 
    }
}