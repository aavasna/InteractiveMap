//when anything except a location is clicked
//hides all location information
document.addEventListener('mouseup', function(e) {
 var textbox = document.getElementsByTagName("div");
    for (var i = 0; i < textbox.length; i++) {
      textbox[i].style.visibility = "hidden"
    }
});
//when a location on map is clicked
//displays information on the location clicked
function clicked(e){
  divs = document.getElementsByTagName('div');
  for(var i = 0; i < divs.length; i++) {
    divs[i].style.visibility = "hidden";
  }
  circle = document.getElementById(e.target.getAttribute("id"));
  var x_pos = parseInt(circle.getAttribute('cx'))+50;
  var y_pos = parseInt(circle.getAttribute('cy'))+180;
  var textbox = document.getElementsByClassName(e.target.getAttribute("id"));
  textbox[0].style.top = (y_pos)+"px";
  textbox[0].style.left = (x_pos)+"px";
  textbox[0].style.visibility = "visible";
};

$(document).ready(function(){
  // Initialize select2
  $("#search_location").select2();

  // Read selected option
  $('#but_read').click(function(){
      var location_marker = $('#search_location option:selected').val();
      circle = document.getElementById(location_marker);
      var x_pos = parseInt(circle.getAttribute('cx'))+50;
      var y_pos = parseInt(circle.getAttribute('cy'))+180;
      var textbox = document.getElementsByClassName(location_marker);
      textbox[0].style.top = (y_pos)+"px";
      textbox[0].style.left = (x_pos)+"px";
      textbox[0].style.visibility = "visible"; 
  });
});
