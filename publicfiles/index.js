let bgmove = null;
let planetakeoff = null;
const backg = document.getElementById("scrollx");  
const plane = document.getElementById("plane"); 
const planeimg = document.querySelector("#plane img");
let posit = 0;
let land = -100;
var land_y =0;
var engine = 0;
var takeoff=0;
window.addEventListener("keypress",(ev) => {
  console.log(ev.key);
  if(ev.key=="Enter"){
      start()
  }else if(ev.key=="W" || ev.key=="w"){
      takeof();
  }else if(ev.key=="S" || ev.key=="s"){
      landing();
  }

});
function start(){
    if(engine==0){
      engine++;
      bgmove = setInterval(frame, 10);
      function frame() {
      if (posit == -4795) {
        posit = 0;
      } else {
        posit--;  
        backg.style.left = posit + "px";
        if(land_y>0){
          plane.style.left = land_y + "px";
          land_y--; 
          if(land_y==0){
            planeimg.style.transform ='rotateY(0deg)';
          } 
        }
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
    planetakeoff = setInterval(taking, 5);
    function taking() {
    if (land == -300) {
      clearInterval(planetakeoff);
      takeoff++;
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
function reverse(){
  if(engine>0 && land == -100){
    clearInterval(bgmove);
    bgmove = setInterval(framereverse, 10);
    function framereverse() {
      if (posit == 0) {
        posit = -4795;
      } else {
        posit++;
        backg.style.left = posit + "px";
        if(land_y<300){
          plane.style.left = land_y + "px";
          land_y++;  
        }else if(land_y== 300){
          planeimg.style.transform ='rotateY(180deg)';
        }
      }
    }

  }
}
