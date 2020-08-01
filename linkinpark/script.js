function PlaySound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.play();
  var x = document.getElementsByClassName("blinkBox");
  var i;
  for(i=0; i< x.length; i++){
    x[i].style.display = "block"; 
  }

}

function StopSound(soundobj) {
    var thissound=document.getElementById(soundobj);
    thissound.pause();
    // thissound.currentTime = 0;
     var x = document.getElementsByClassName("blinkBox");
  var i;
  for(i=0; i< x.length; i++){
    x[i].style.display = "none"; 
  } 
}