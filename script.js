// Assignment Code
var claw = prompt('Please enter a number between 8 and 128')
var hood = parseInt(claw)
var vrai

if (hood > 7 && hood < 129) {vrai = true}else{vrai = false}
while (vrai === false){
  claw = prompt('Please enter a number between 8 and 128')
  hood = parseInt(claw);
  if (hood > 7 && hood < 129) {vrai = true}


}
 


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
