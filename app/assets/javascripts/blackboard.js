window.onload = function() {
  var paper = new Raphael(document.getElementById('welcome'), 500, 500);
  var circles = paper.set();
  
  $('#welcome').mousedown(function(e) {
    
    $('#welcome').mousemove(function(e) {
        $('#status').html(e.pageX +', '+ e.pageY);
    });
    
    $('#welcome').mouseup(function(e) {
       unbind('mousemove')
    }); 
  
  }); 
  
  
    
  
  

  circles.attr({stroke: "#fff",fill: "#333", radial_gradient: "r#fff-#000"})  
}
