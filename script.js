// Assignment Code
var acc = 0;

var password = [];
let ranNum
var abc = ["a","b","c"];
var ABC = ["a","b","c"];
var numbers = ["1","2","3"]
var spesh = ["*","/","$"]

//let ranNum

var claw = prompt('Please enter a number between 8 and 128')
// initial prompt ask
var hood = parseInt(claw)
//turns prompt response to numerical form
var vrai

if (hood > 7 && hood < 129) {vrai = true}else{vrai = false}
//this logic sets up a condition for the while statement
while (vrai === false){
  //if the initial conditions aren't met the initial prompt is repeted
  claw = prompt('Please enter a number between 8 and 128')
  hood = parseInt(claw);
  if (hood > 7 && hood < 129) {vrai = true}
  //once conditions for truth are met - while loop broken 

  //now we are going to work on the prompts

  


}
alert("You need to choose at least one of the following character types for your password!") 
//this asks the question!!!!!



//this adds one to the accumalator if confirmed.  and not if not.  ths will be repeated for each of the character types!
if (confirm("Do you want to include lower case letters????")){
  password.push(abc)

}

//confirm prompt 2

if (confirm("Do you want to include upper case letters????")){
  password.push(ABC)

}

//confirm prompt 3
if (confirm("Do you want to include numbers case letters????")){
  password.push(numbers)

}

//confirm prompt 4
if (confirm("Do you want to include lower case letters????")){
  acc++
  password.push(spesh)

}
password = password.flat()
//this turns array or arrays 'password' into a single array;
//const statement is easy way of accessing array length for password generation purposes!!!

ranNum = password.length;

if (ranNum === 0){vrai = false}
//boolean flag set up for form validation purposes

while (vrai === false){
  //if there has been no choice - the question repeats

  alert("You need to choose at least one of the following character types for your password!") 
//this asks the question - ***again***!!!!!



//this adds one to the accumalator if confirmed.  and not if not.  ths will be repeated for each of the character types!
if (confirm("Do you want to include lower case letters????")){
  password.push(abc)

}

//confirm prompt 2

if (confirm("Do you want to include upper case letters????")){
  password.push(ABC)

}

//confirm prompt 3
if (confirm("Do you want to include numbers case letters????")){
  password.push(numbers)

}

//confirm prompt 4
if (confirm("Do you want to include lower case letters????")){
  acc++
  password.push(spesh)

}
password = password.flat()
//this turns array or arrays 'password' into a single array;
//ranNum is easy way of accessing array length for password generation purposes!!!

ranNum = password.length;
if (ranNum > 0){vrai = true}
}
//resetting vrai to true breaks while loop - designating form validation!!!


alert(ranNum)

 


var generateBtn = document.querySelector("#generate");

function generatePassword() {
  return "TODO: Implement password generator";
}

// Write password to the #password input
function writePassword() {
  console.log("Ive been called");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
