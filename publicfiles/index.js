let bgmove = null;
let planetakeoff = null;
const backg = document.getElementById("scrollx");  
const plane = document.getElementById("plane"); 
let posit = 0;
let land = -100;
let n = 10;
var engine = 0;
var takeoff=0;
function start(n){
    if(engine==0){
      engine++;
      bgmove = setInterval(frame, n);
      function frame() {
      if (posit == -4795) {
        posit = 0;
      } else {
        posit--;  
        backg.style.left = posit + "px"; 
      }
      }
    }else{
      if(plane.style.top == "" || plane.style.top == "-100px"){
        clearInterval(bgmove);
        engine=0;
      }
    }
}
function takeof(){
  if(takeoff==0 && engine!=0){
    takeoff++;
    planetakeoff = setInterval(taking, 5);
    function taking() {
    if (land == -300) {
      clearInterval(planetakeoff);
    } else {
      land--;  
      plane.style.top = land + "px"; 
    }
    }
  }else{
    clearInterval(planetakeoff);
  }
}
function landing(){
  if(takeoff!=0){
    planetakeoff = setInterval(tak, 5);
    function tak() {
    if (land == -100) {
      clearInterval(planetakeoff);
      takeoff=0;
      engine++;
    } else {
      land++;  
      plane.style.top = land + "px"; 
    }
    }
  }

}
