$description = $(".description");

  $('.land').hover(function() {
    
    $(this).attr("class", "land");
    $description.addClass('active');
    $description.html($(this).attr('title'));
  }, function() {
    $description.removeClass('active');
  });

$(document).on('mousemove', function(e){
  
  $description.css({
    left:  e.pageX,
    top:   e.pageY - 70
  });
  
});