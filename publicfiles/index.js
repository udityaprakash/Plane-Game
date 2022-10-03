function myMove() {
    let id = null;
    var elem= document.getElementById("buildings"); 
    let pos = 400;
    let he = randomgenerator();
    elem.style.height = he + "px";
    elem.style.top = -(he - 300) + "px"; 
    id = setInterval(frame, 5);
    function frame() {
      if (pos == -50) {
        clearInterval(id);
        myMove();
      } else {
        pos--;
        elem.style.height = he + "px"; 
        elem.style.left = pos + "px"; 
      }
    }
  } 
  function randomgenerator(){
        let he = (Math.random())*300;
        if(he<240 && he>100){
            return he;
        }else{
            randomgenerator();
        }
  }
  myMove();