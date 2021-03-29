function setColor() {
  var a = new Date();
  var r = a.getDay();
  
  if(r > 3) {
    r -= 3 
  }
  
  if(r == 1){
    var liberty = document.querySelectorAll(".text.liberty");
    var prosperity = document.querySelectorAll(".text.prosperity");

    [].forEach.call(liberty, function(liberty) {
      liberty.classList.remove("text");
      liberty.classList.add("green");
    });
    [].forEach.call(prosperity, function(prosperity) {
      prosperity.classList.remove("text");
      prosperity.classList.add("green");
    });
  }
  
  if(r == 2){
    var resistance = document.querySelectorAll(".text.resistance");
    var diligence = document.querySelectorAll(".text.diligence");

    [].forEach.call(resistance, function(resistance) {
      resistance.classList.remove("text");
      resistance.classList.add("green");
    });
    [].forEach.call(diligence, function(diligence) {
      diligence.classList.remove("text");
      diligence.classList.add("green");
    });
  }
    
  if(r == 3) {
    var poesy = document.querySelectorAll(".text.poesy");
    var or = document.querySelectorAll(".text.or");

    [].forEach.call(poesy, function(poesy) {
      poesy.classList.remove("text");
      poesy.classList.add("green");
    });
    [].forEach.call(or, function(or) {
      or.classList.remove("text");
      or.classList.add("green");
    });

  }
  if(r == 0){
    var liberty = document.querySelectorAll(".text.liberty");
    var prosperity = document.querySelectorAll(".text.prosperity");
    var resistance = document.querySelectorAll(".text.resistance");
    var diligence = document.querySelectorAll(".text.diligence");
    var poesy = document.querySelectorAll(".text.poesy");
    var or = document.querySelectorAll(".text.or");

    [].forEach.call(liberty, function(liberty) {
      liberty.classList.remove("text");
      liberty.classList.add("green");
    });
    [].forEach.call(prosperity, function(prosperity) {
      prosperity.classList.remove("text");
      prosperity.classList.add("green");
    });
    [].forEach.call(resistance, function(resistance) {
      resistance.classList.remove("text");
      resistance.classList.add("green");
    });
    [].forEach.call(diligence, function(diligence) {
      diligence.classList.remove("text");
      diligence.classList.add("green");
    });
    [].forEach.call(poesy, function(poesy) {
      poesy.classList.remove("text");
      poesy.classList.add("green");
    });
    [].forEach.call(or, function(or) {
      or.classList.remove("text");
      or.classList.add("green");
    });
  }
}