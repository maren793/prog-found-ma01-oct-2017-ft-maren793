/*LEVEL 1
---------*/
//Create musician object
var musician = {
  name: "Ed Sheeran",
  age: 27,
  alive: true
}

//Add style of music to object
musician.style = "Indiepop and Folk"

//Console.log the name of musician and their style of music
console.log(musician.name, musician.style);

//Create an array of their album titles
var array = ["+", "x Deluxe Edition)", "Divide")];

//Using a for loop console.log each album title
for(var i = 0; i < array.length; i++)
  console.log(array[i]);

//Check if musician is alive and log the correct statement.
if(musician.alive) {
  console.log("Looking forward to hearing more");
}

/*LEVEL 2
---------*/
//Create a class for a single of an album
class Single {
  constructor(name, released, length) {
  this.name = name;
  this.released = 2017;
  this.length = 4:23;
  }
}

//Create to singles using the class
var single1 = new Single("Shape of you", "2017", "4:23");
var single2 = new Single("Perfect", "2017", "4:40");

var singles = [single1, single2];


//Console.log out the objects

console.log(singles);
