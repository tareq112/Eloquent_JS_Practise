/*Minimum
The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can build something like that now. Write a function
min that takes two arguments and returns their minimum.
*/
function min(a,b){
    if(a < b){
        return a;
    }
    else return b;
}

console.log('The min number is :'+ min(3,4));
/*
Recursion
We’ve seen that % (the remainder operator) can be used to test whether a
number is even or odd by using % 2 to see whether it’s divisible by two. Here’s
another way to define whether a positive whole number is even or odd:
• Zero is even.
• One is odd.
• For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The
function should accept a single parameter (a positive, whole number) and return
a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a
way to fix this?

*/
function isEven(n) {
  if (n == 0) return true;
  else if (n == 1) return false;
  else if (n < 0) return isEven(-n);
  else return isEven(n - 2);
}

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → false

/*
Write a function countBs that takes a string as its only argument and returns
a number that indicates how many uppercase “B” characters there are in the
string.
Next, write a function called countChar that behaves like countBs, except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.

*/


function countBs(string, s){
    let res = 0;
    //console.log('string length:' + string.length);
    for(let i = 0; i < string.length; i++){
       if(string[i] == s){
            res++;
       }
    }
   return res;
}

console.log(countBs('BaBy','a'));
// → 1
console.log(countBs('BBC','B'));
// → 2
console.log(countBs('kakkerlak','k'));
// → 4
let numbers = [5, 1, 7];
console.log(Math.max(...numbers));
function randomPointOnCircle(radius) {
    let angle = Math.random() * 2 * Math.PI;
    return {x: radius * Math.cos(angle),
    y: radius * Math.sin(angle)};
    }
    console.log(randomPointOnCircle(2));
    // → {x: 0.3667, y: 1.966}
    
    let ran = Math.random();
    console.log(ran);
    
