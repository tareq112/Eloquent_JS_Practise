/*01.Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######
*/

for (let i = '#'; i.length < 7; i += '#') {
    console.log(i);

}

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).
(This is actually an interview question that has been claimed to weed out
a significant percentage of programmer candidates. So if you solved it, your
labor market value just went up.)
*/
//print 1 - 100
//cond1: num % 3 print "Fizz"
//cond2: num % 5 but not 3 print "Buzz"
//cond3: num %3 && num % 5 print "FizzBuzz"

for (let i = 1; i <= 100; i++) {

    let output = "";
    if (i % 3 == 0) {
        output += "Fizz";
    }
    if (i % 5 == 0) {
        output += "Buzz";
    }
    console.log(output || i);

}


/*
Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:
         # # # #
        # # # #
         # # # #
        # # # #
         # # # #
        # # # #
         # # # #
        # # # #
When you have a program that generates this pattern, define a binding size
= 8 and change the program so that it works for any size, outputting a grid
of the given width and height.
*/

/*for (let i = '_'; i.length < 8; i += '_') {
    for (let j = '#'; j.length < 8; j += '#')
    console.log( i + j );

}*/
const arr = [];
let output = "";
for (let i = 0; i < 8; i++) {
    for(let j = 0; j< 8 ; j++){
        if ([i][j] % 2 == 0) {
            output += "_";
        }
        else{
            output += '#';
            
        }
    }
    output+= '\n';
   }
   console.log(output);