$(".to-bottom").on("click", function() {
  $("html, body").animate({
    scrollTop: $(document).height()
  }, 18e3)
}), $(".to-top").on("click", function() {
  $("html, body").animate({
    scrollTop: 0
  }, 18e3)
}), $(function() {
  var a, c = $("#sc-spy"),
    h = c.outerHeight() + 15,
    e = c.find("a"),
    f = e.map(function() {
      var a = $($(this).attr("href"));
      if (a.length) return a
    });
  $(window).scroll(function() {
    var b = $(this).scrollTop() + h,
      c = f.map(function() {
        if ($(this).offset().top < b) return this
      });
    c = c[c.length - 1];
    var i = c && c.length ? c[0].id : "";
    a !== i && (a = i, e.parent().removeClass("active").end().filter("[href='#" + i + "']").parent().addClass("active"))
  })
}), $(document).ready(function() {
  $(".smt-scr").on("click", function(c) {
    c.preventDefault();
    var a = this.hash;
    $("html, body").animate({
      scrollTop: $(a).offset().top
    }, 800)
  })
});
