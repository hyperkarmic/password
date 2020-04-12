// Assignment Code


let passwordArray = [];
let characters = [];
let zeroCheck;
const abc = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const ABC = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const numbers = ["0","1","2","3","5","6","7","8","9"]
const special = ['"',
' ',"!",'"',"#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","\\","]","^","_","`","{","|","}","~"];

//let zeroCheck will be used to check instances of zero, for validation purposes!

let prompt1 = prompt('Please enter a number between 8 and 128')
// initial prompt ask
const passwordLength = parseInt(prompt1)
//turns prompt response to numerical form
let vrai;




if (passwordLength > 7 && passwordLength < 129) {vrai = true}else{vrai = false}
//this logic sets up a condition for the while statement
while (vrai === false || Number.isInteger(passwordLength) !== true){
  //if the initial conditions aren't met the user is prompted again!  This tests for non-numerical input and numbers out of range.
  prompt1 = prompt('That is not a valid entry!  Please enter a number between 8 and 128')
  passwordLength = parseInt(prompt1);
  if (passwordLength > 7 && passwordLength < 129) {vrai = true}
  //once conditions for truth are met - while loop broken 

  //now we are going to work on the prompts

  


}
alert("You need to choose at least one of the four following character sets for your password!  Choose OK to accept character set, or 'cancel' if you do not wish to use a particular character set!") 
//this asks the question!!!!!



//this pushes the lowercase array to the password array if confirmed.  and not if not.  ths will be repeated for each of the character type arrays!
if (confirm("Do you want to include lower case letters in your password????")){
  characters.push(abc)

}

//confirm prompt 2

if (confirm("Do you want to include upper case letters in your password????")){
  characters.push(ABC)

}

//confirm prompt 3
if (confirm("Do you want to include numbers case letters???? in your password")){
  characters.push(numbers)

}

//confirm prompt 4
if (confirm("Do you want to include lower case letters in your password????")){
  
  characters.push(special)

}
characters = characters.flat()
//this turns array of arrays pushed into 'characters' into a single array to make it ready for random array element selection;


zeroCheck = characters.length;

if (zeroCheck === 0){vrai = false}
//boolean flag set up for form validation purposes

while (vrai === false){
  //if there has been no choice of character sets - the question repeats.  The password generator needs something to work with!

  alert("At least one set of characters must be chosen in order for a password to generate!!!") 
//this asks the question - ***again***!!!!!



//this adds the lower case character array to the password array if confirmed!  and not if not!  ths will be repeated for each of the character type arrays!
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
//this turns array or arrays 'characters' into a single array;
//zeroCheck is easy way of accessing array length for validation purposes!!!

zeroCheck = characters.length;
if (zeroCheck > 0){vrai = true}
}
//resetting vrai to true breaks while loop - designating form validation!!!




 


var generateBtn = document.querySelector("#generate");

function generatePassword() {

  

  for (let i = 0; i < passwordLength; i++){
    let  passChar = characters[Math.floor(Math.random() * characters.length)];
    passwordArray.push(passChar)
    //loop iterates as many times as password length.  Passchar allows for a random element of password character array to be chosen.  This is then pushed to a password array.

  }



  //the password array is joined, then returned
  return passwordArray.join("");
}

// Write password to the #password input
function writePassword() {
  
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
