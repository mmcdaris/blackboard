window.onload = function() {
  var paper = new Raphael(document.getElementById('welcome'), 500, 500);
  var line = paper.set();
  
  function draw(x, y) {
    line.push(paper.circle(x, y, 1));
    //alert(x + ", " + y);
  }

  
  
  $('#welcome').mousedown(function(e) {
    
    $('#welcome').mousemove(function(e) {
        $('#status').html(e.pageX +', '+ e.pageY);
        draw(e.pageX, e.pageY);
    });
    
    $(document).mouseup(function(e) {
       $('#welcome').unbind('mousemove');
    }); 
  
  }); 
  
  
    
  
  

  line.attr({stroke: "#fff",fill: "#333", radial_gradient: "r#fff-#000"})  
}
