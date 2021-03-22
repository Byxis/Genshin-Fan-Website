$(document).ready(function(){
  
    $(".navigation_button").click(function(){

      if($(".navigation_button").text() == "☰"){
        $(".navigation_button").text("✖");
      }else{
        $(".navigation_button").text("☰");
      }
      
      $(".navigation_list").toggle("slow");
    }); 
  
  window.onresize = function() {
    $(".navigation_list").show("fast");
  }
});



