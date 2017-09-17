$(document).ready(function() {
  $.each($(".message"), function(index, item) {
    if($(item).outerHeight() > 75) {
      $(item).css("padding-top", "10px");
      $(item).css("padding-bottom", "10px");
      $(item).find(".text").css("display", "block");
      $(item).find(".text").css("margin-bottom", "5px");
    } else {
      $(item).find(".time").css("float", "none")
    }
  });
});
