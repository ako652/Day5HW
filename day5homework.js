/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
const area= function(l1 = 10, l2=5){

    area = l1*l2
    console.log(area)
}
/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
let interger= 1
interger0=2

let crazySum= function(){

    if (crazysum= interger + interger0){
        console.log(´${ 'sum'= crazysum}´)
    }
    if (interger=interger0){

        result=interger + interger0/3
        console.log(result)
    }
}

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
let number= abs(20)
number0=19

let crazyDiff= function(){

    diff = abs(number -number0)
    console.log(crazyDiff)

    if (number>19){
        diff1=diff*3 
    }
    console.log(crazyDiff)
}

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

const boundary= function(n=400) {
    console.log(boundary)
    for( let n=20; n<=100; n++){
        console.log(boundary)
    }


}

/* WRITE YOUR CODE HERE */

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

let before="hello"

let strivify= function(){

    if(before==="strive" + "hello" ){
    console.log(before)}
    else if(before==="hello"){
    
    
}
onsole.log(strivify)

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

let n=100

let check3and7=function(){
    for ( let i = 0, j = 0; i < n; i += j ^= 1 ){

        if(n==!7 )
        console.log(check3and7)
        if(n==!3)
        console.log(check3and7)
    }  


}


/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

let first="strive"
let second=""

let reverseString= function(){

    for (let i=0; i<first.length; i++){

        console.log(first[i])
        second=first[i].reverse()
        

    }
    console.log(reverseString)
}

/* WRITE YOUR CODE HERE */

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/


/* WRITE YOUR CODE HERE */

/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/