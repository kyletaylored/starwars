
// Array
arrayOfStrings = ["hello", "it's", "me", "adelle"];
arrayOfStrings[0]; // Hello

arrayOfStrings.push("world"); // adds "world" to end.
arrayOfStrings.pop(); // removes world from end (and technically returns it.)

// Object
var objectOfNumbers = {
  "a": 7,
  "b": 4,
  "add": function(){
    return this.a + this.b;
  }
};

objectOfNumbers.add(); // 11

objectOfNumbers.a = 3;
objectOfNumbers.add(); // 7
