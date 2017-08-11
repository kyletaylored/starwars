
(function($){

  $("a.fancy-link").on("click", function(){
    var topLink = this;
    $("span.text", this).on("click", function(){
      var class = $(this).prop("class");
    })
  });

})(jQuery);
