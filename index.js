$(document).ready(function() {

  var $h1 = $("h1");

  // $h1.click(function() {
  //   // $(this).html(this.innerHTML + " MORE TEXT ");
  //   this.innerHTML = this.innerHTML + this.namespaceURI;
  // });

  // $h1.prepend("THIS IS BEFORE THE HEADER");
  // $h1.append("THIS IS AFTER THE HEADER");

  var cssOptions = {
    "color": "blue",
    "font-family": "Arial",
    "text-decoration": "underline"
  };

  var date = new Date();
  // If the day is even
  if (date.getDay() % 2 == 0) {
    cssOptions["color"] = "red";
  }

  // On click, change paragraph style.
  $("p").click(function(){
    $(this).css(cssOptions);
  });

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


  // Add new Star Wars movie
  var $newStarWarsMovie = $(".movies > .col-sm-4:last-child").clone();
  // console.log($newStarWarsMovie);
  $newStarWarsMovie.find("strong").html("Chapter 7: The Force Awakens");
  $newStarWarsMovie.find("img").prop("src", "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg");
  $newStarWarsMovie.find(".panel-footer a").prop("href", "http://www.imdb.com/title/tt2488496/");

  $(".movies > .col-sm-4:last-child").after($newStarWarsMovie);

  var newStarWarsMovie = document.querySelector(".movies > .col-sm-4:last-child").cloneNode(true);
  // console.log(newStarWarsMovie);
  newStarWarsMovie.querySelector("strong").innerText = "Chapter 8: Starkiller";
  newStarWarsMovie.querySelector("img").src = "https://images-na.ssl-images-amazon.com/images/M/MV5BOTAzODEzNDAzMl5BMl5BanBnXkFtZTgwMDU1MTgzNzE@._V1_UX182_CR0,0,182,268_AL_.jpg";
  newStarWarsMovie.querySelector(".panel-footer a").href = "http://www.imdb.com/title/tt2488496/";

  document.querySelector(".movies").appendChild(newStarWarsMovie);

  // Grab all lists in sidebar.
  var $lists = $("aside .list-group");

  // loop through lists.
  $lists.each(function(){
    window.count = $(this).find("li").length;
    console.log("List group count: " + count);
  });

  console.log("List group count: " + count);


  // Taking count, multiply by 100, make height.
  // $lists.css("height", count * 100+"px");


});

function globalFunction(name) {
  console.log("Hey look, it's global! " + name);
}

globalFunction("kyle");
