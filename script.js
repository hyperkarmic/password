// Assignment Code
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
