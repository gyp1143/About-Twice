$(".to-bottom").on("click", function() {
  $("html, body").animate({
    scrollTop: $(document).height()
  }, 18e3)
}), $(".to-top").on("click", function() {
  $("html, body").animate({
    scrollTop: 0
  }, 18e3)
}), $(function() {
  function b() {
    var a = $(this).scrollTop() + j,
      b = e.map(function() {
        if ($(this).offset().top < a) return this
      });
    b = b[b.length - 1];
    var f = b && b.length ? b[0].id : "";
    d !== f && (d = f, h.removeClass("active").filter("[data-member='" + f + "']").addClass("active"))
  }
  var d, g = $("#sc-spy"),
    j = g.outerHeight() + 15,
    h = g.find("a"),
    e = h.map(function() {
      var b = $("#" + $(this).data("member"));
      if (b.length) return b
    });
  b(), $(window).on("resize scroll", function() {
    b()
  })
}), $(document).ready(function() {
  $(".smt-scr").on("click", function() {
    $("html, body").animate({
      scrollTop: $("#" + $(this).data("member")).offset().top
    }, 800)
  })
});
