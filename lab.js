////////// PROBLEM 1 //////////
/*
  Create a variable called 'lovesCode' and set it equal to true. 
  Check to see if 'lovesCode' is equal to true or false. 
  If it is true, console log "I love to code!"
  If it is not, console log "Coding has its challenges."
*/

let lovesCode = true

if(lovesCode = true){
  console.log(`Coding has its challenges`)
} else if(lovesCode = false){
  console.log(`I love to code!`)
}

// For problems 2-3 use the following lines of code:
var amysAge = 29;
var brittanisAge = 34;
var amysBirthYear = 1991;
var brittanisBirthYear = 1986;

////////// PROBLEM 2 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy or Brittani is older, and then console.log '{name} is older'. Hint: Consider what will happen if they are the same age. Handle this situation.
*/

if(amysAge > brittanisAge){
  console.log(`Amy is older`)
} else if (amysAge = brittanisAge){
console.log(`They are the same age`)
} else {
    console.log (`Brittany is older`)
}
  

////////// PROBLEM 3 //////////

/*
  Using an if statement and a comparison operator, create code that will check if Amy and Brittani were born in the same year. If they were, console.log 'Amy & Brittani were born in the same year'. If they were not, console.log 'Amy & Brittani were not born in the same year'
*/

if(amysAge = brittanisAge){
  console.log(`Amy and Brittany are the same age`)
} else {
  console.log(`Amy and Brittany were not born in the same year`)
}

////////// PROBLEM 4 //////////

let temperature = 55;
let rain = true;

/*
  Using an if statement and a comparison operator, create code that will log a suggestion on what type of clothes one should wear for the day, based on the above temperature and rain.
  If it is 80 degrees or above, and raining, . If it is between 60 and 80 degrees, and raining, . If it is 60 degrees or below, . Come up with your own clothing suggestions based on those temperature parameters when it is not raining.
*/

if(temperature >= 80 && rain === true){
  console.log(`One should wear a t-shirt and take an umbrella`)
} else if (temperature <=60 && temperature >=80 && raining === true){
  console.log(`one should wear a rain-jacket`)
} else if (temperature >= 60 && rain === true){
  console.log(`one should wear a jacket and carry an umbrella`)
}
else if(temperature >= 80 && rain === false){
  console.log(`One should wear a t-shirt and shorts`)
} else if (temperature <=60 && temperature >=80 && raining === false){
  console.log(`one should wear a long sleeve shirt and shorts`)
} else if (temperature >= 60 && rain === false){
  console.log(`one should wear a jacket and jeans`)
}

////////// PROBLEM 5 //////////

/*
  Create a for-loop that runs 10 times, and on each iteration logs the word 'hello'.
*/

for(let i = 0; i < 10; i++){
  console.log(`Hello there`)
}

////////// PROBLEM 6 //////////

/*
  Create a for-loop that runs 10 times, logging the numbers 1 through 10. Ex, on the first iteration it would log 1, on the second iteration it would log 2.
*/

let num = 1
for(let i = 0; i < 10; i++){
  console.log(num)
num++
}

////////// PROBLEM 7 //////////

/*
  Create a for-loop that logs the numbers 0 through 10 backwards. Ex, on the first iteration it would log 10, on the second iteration it would log 9.
*/

let num2 = 10
for(let i = 0; i < 10; i++){
  console.log(num2)
num2 -= 1
}

////////// PROBLEM 8 //////////

let score = 0;
let passingScore = 7;

/*
  Create a while-loop that logs "" while the score variable above is below passingScore. In each iteration of the loop, increase the score by one. If your code is successful, you will see your logged statement 7 times.
*/

while(score < passingScore){
  console.log(`Your score is not high enough`)
score++
}

////////// INTERMEDIATE PROBLEMS //////////

////////// PROBLEM 9 //////////
/*
  Create a variable called 'changeMyMind' and set it equal to true. 
  Check to see if changeMyMind is set to true or false, if it is true, change the status to false, if it is false, change the status to true.

*/

let changeMyMind = true

if (changeMyMind = true){

  let changeMyMind = false
  console.log(changeMyMind)

} else {

  let changeMyMind = true
  console.log(changeMyMind)
}


////////// PROBLEM 10 //////////
// Using the "not" operator (!), change the current value of changeMyMind to true (it should currently be set to false due to the if-else statement in Problem 9). After you change the value of changeMyMind, console.log it's new value (it should now read true).

let ChangeMyMind = false

if (changeMyMind != false){

  let changeMyMind = true
  console.log(changeMyMind)

} else {

  let changeMyMind = false
  console.log(changeMyMind)
}


////////// ADVANCED PROBLEMS //////////

////////// PROBLEM 11 //////////

let z = 5;
// Create a while loop that continues to run while z is greater than 0. Within the while loop, log a countdown from the value of z to 1. Once you have logged the countdown, make sure you decrement z by 1. If your code is running properly, you should see: 5,4,3,2,1,4,3,2,1,3,2,1,2,1,1.

while(z > 0){
  y = z
  while(y > 0){
    console.log(y)
    y -= 1
  }
  z -= 1  
}