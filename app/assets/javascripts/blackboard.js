window.onload = function() {
  var paper = new Raphael(document.getElementById('welcome'), 500, 500);
  var color = "#fff";
  var size = 4;
  
  
  //hijack that mouse!
  $('#welcome').mousedown(function(e) {
    $('#welcome').mousemove(function(e) {
        $('#status').html(e.pageX +', '+ e.pageY);
        var circle = paper.circle(e.pageX - 100, e.pageY - 85, size);
        circle.attr({stroke: color,fill: color}) 
    });
    $(document).mouseup(function(e) {
       $('#welcome').unbind('mousemove');
    }); 
  }); 
  
  //highjack that pointer
  $('#welcome').style.cursor="crosshair"

}
