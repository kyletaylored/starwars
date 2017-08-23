// madlibs.js
$(document).ready(function(){

  $("form#adventure-time").submit(function(event) {

    var person1 = $("input#person1").val();
    var person2 = $("input#person2").val();
    var animal = $("input#animal").val();
    var exclamation = $("input#exclamation").val();
    var verb = $("input#verb").val();
    var noun = $("input#noun").val();

    $(".person1").text(person1);
    $(".person2").text(person2);
    $(".animal").text(animal);
    $(".exclamation").text(exclamation);
    $(".verb").text(verb);
    $(".noun").text(noun);

    var input = [];
    input["person1"]= person1;
    input["person2"] = person2;
    input["animal"] = animal;
    input["exclamation"] = exclamation;
    input["verb"] = verb;
    input["noun"] = noun;

    console.log(input);

    $("#story").show();

    // console.log(person1);
    event.preventDefault();

  });

});
