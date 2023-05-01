// GIVEN
console.log(example);
var example = "I'm the example!";
// AFTER HOISTING BY THE INTERPRETER
// var example;
// console.log(example); // logs undefined
// example = "I'm the example!";

// 1- 
console.log(hello);
var hello = 'world';
// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello); // logs undefined
// hello = 'world';

// 2-
var needle = 'haystack';
test();
function test() {
    var needle = 'magnet';
    console.log(needle);
}
// AFTER HOISTING BY THE INTERPRETER
// var needle = 'haystack'
// test(); get hoisted
// runs the fuction test()
// changes the var needle = 'haystack' to var needle = 'magnet'
// console.log(needle) prints 'magnet'

// 3-
var brendan = 'super cool';
function print() {
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan = 'super cool'
// runs function print()
// console.log(brendan)
// second console.log(brendan) // logs 'super cool' because function print was never called.

// 4-
var food = 'chicken';
console.log(food);
eat();
function eat() {
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
// AFTER HOISTING BY THE INTERPRETER
// var food = 'chicken'
// logs 'chicken'
// hoists the function eat()
// food = 'half-chicken'
// logs 'half-chicken'

// 5-
mean();
console.log(food);
var mean = function () {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// I think this is gonna be an error because mean is not a function

//6-
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// AFTER HOISTING BY THE INTERPRETER
// var genre;
// console.log(genre); // logs undefined
// genre = "disco";
// hoists rewind function;
// logs 'rock', 'r&b'
// logs 'disco'

// 7-
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// AFTER HOISTING BY THE INTERPRETER
// var dojo; // logs 'san jose'
// hoists learn function;
// logs 'seattle', 'burbank'
// logs 'san jose'


// 8-
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students) {
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if (dojo.students > 50) {
        dojo.hiring = true;
    }
    else if (dojo.students <= 0) {
        dojo = "closed for now";
    }
    return dojo;
}
