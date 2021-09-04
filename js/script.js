$description = $(".description");
$map_description = $(".map__description");

  $('.land').hover(function() {
    
    $(this).attr("class", "land");
    $description.addClass('active');
    $description.html($(this).attr('title'));
    $map_description.html($(this).attr('description'));
  }, function() {
    $description.removeClass('active');
  });

$(document).on('mousemove', function(e){
  
  $description.css({
    left:  e.pageX,
    top:   e.pageY - 70
  });
  
});