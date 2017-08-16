$(document).ready(function() {

  var $h1 = $("h1");

  $h1.click(function() {
    // $(this).html(this.innerHTML + " MORE TEXT ");
    this.innerHTML = this.innerHTML + this.namespaceURI;
  });

  $h1.prepend("THIS IS BEFORE THE HEADER");
  $h1.append("THIS IS AFTER THE HEADER");

  // We're dumb - it calls it for everything.
  if ($h1.hasClass("heading")) {
    $h1.addClass("special");
  }

  // INSTEAD, loop through each.
  $h1.each(function(){
    if ($(this).hasClass("heading")) {
      $(this).addClass("FOREACH");
    }
  });

});
