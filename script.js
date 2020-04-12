// Assignment Code
var acc = 0;

var passwordArray = [];
var characters = [];
let zeroCheck;
var abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var ABC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var numbers = ["0","1","2","3","5","6","7","8","9"]
var special = ['"',
' ',"!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

//let zeroCheck will be used to check instances of zero, for validation purposes!

var prompt1 = prompt('Please enter a number between 8 and 128')
// initial prompt ask
var passwordLength = parseInt(prompt1)
//turns prompt response to numerical form
var vrai

if (passwordLength > 7 && passwordLength < 129) {vrai = true}else{vrai = false}
//this logic sets up a condition for the while statement
while (vrai === false){
  //if the initial conditions aren't met the initial prompt is repeted
  prompt1 = prompt('Please enter a number between 8 and 128')
  passwordLength = parseInt(prompt1);
  if (passwordLength > 7 && passwordLength < 129) {vrai = true}
  //once conditions for truth are met - while loop broken 

  //now we are going to work on the prompts

  


}
alert("You need to choose at least one of the following character types for your password!") 
//this asks the question!!!!!



//this adds one to the accumalator if confirmed.  and not if not.  ths will be repeated for each of the character types!
if (confirm("Do you want to include lower case letters????")){
  characters.push(abc)

}

//confirm prompt 2

if (confirm("Do you want to include upper case letters????")){
  characters.push(ABC)

}

//confirm prompt 3
if (confirm("Do you want to include numbers case letters????")){
  characters.push(numbers)

}

//confirm prompt 4
if (confirm("Do you want to include lower case letters????")){
  acc++
  characters.push(special)

}
characters = characters.flat()
//this turns array or arrays in 'characters' into a single array;
//const statement is easy way of accessing array length for password generation purposes!!!

zeroCheck = characters.length;

if (zeroCheck === 0){vrai = false}
//boolean flag set up for form validation purposes

while (vrai === false){
  //if there has been no choice - the question repeats

  alert("You need to choose at least one of the following character types for your password!") 
//this asks the question - ***again***!!!!!



//this adds one to the accumalator if confirmed.  and not if not.  ths will be repeated for each of the character types!
if (confirm("Do you want to include lower case letters????")){
  characters.push(abc)

}

//confirm prompt 2

if (confirm("Do you want to include upper case letters????")){
  characters.push(ABC)

}

//confirm prompt 3
if (confirm("Do you want to include numbers case letters????")){
  password.push(numbers)

}

//confirm prompt 4
if (confirm("Do you want to include lower case letters????")){
  acc++
  characters.push(special)

}
characters = characters.flat()
//this turns array or arrays 'characters' into a single array;
//zeroCheck is easy way of accessing array length for validation purposes!!!

zeroCheck = characters.length;
if (zeroCheck > 0){vrai = true}
}
//resetting vrai to true breaks while loop - designating form validation!!!




 


var generateBtn = document.querySelector("#generate");

function generatePassword() {

  

  for (let i = 0; i < passwordLength; i++){
    var  passChar = characters[Math.floor(Math.random() * characters.length)];
    passwordArray.push(passChar)

  }



  console.log(passwordArray)
  return passwordArray.join("");
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
