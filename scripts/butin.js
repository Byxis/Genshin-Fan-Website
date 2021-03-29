function setButin() {
  var a = new Date();
  var r = a.getDay();
  var days = ['Dimanche','Lundi','Mardi','Mercredi','Jeudi','Vendredi','Samedi'];
  
  document.getElementById('today').innerHTML = days[a.getDay()];
  
  if(r == 0) {
    document.getElementById('today-nbr').innerHTML = 4;
  } else if (r > 3){
    document.getElementById('today-nbr').innerHTML = r-3;
  } else {
    document.getElementById('today-nbr').innerHTML = r;
  }
}