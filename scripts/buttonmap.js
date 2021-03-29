$(document).ready(function(){
  $(".map-btn").click(function(){
      if($(".nbrmap").text() == "2"){
        $(".map").attr('src',"https://webstatic.mihoyo.com/app/ys-map-cn/index.html?bbs_presentation_style=no_header&ts=1606133548270#/map/2?shown_types=&center=1126.00,-571.00&zoom=-2.00");
        $(".nbrmap").text("1");
      }else{
        $(".map").attr('src',"https://www.genshin-impact.fr/map/");
        $(".nbrmap").text("2");
      }
    }); 
});



