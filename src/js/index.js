cont.onclick(function (event) {
  if ($(this).hasClass("expand")) {
    $(this).removeClass("expand").addClass("shrink");
    $("#icon").removeClass("expand");
  } else {
    if ($(this).hasClass("shrink")) {
      $(this).removeClass("shrink").addClass("expand");
    } else {
      $(this).addClass("expand");
    }
    $("#icon").addClass("expand");
  }
});
