// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//---------------------------------Starter code^

//Characters for Password Generations//
//password prompts for Password Generations//
var passwordPromptLength = prompt("How many characters would you like your password to be? Enter a number between 8 and 128");

var passwordPromptLowercase = prompt("Do you want your password to have lowercase characters? Type YES or NO");

var passwordPromptUpperCase = prompt("Do you want your password to have uppercase characters? Type YES or NO");

var passwordPromptNumeric = prompt("Do you want your password to have numbers? Types YES or NO");

var passwordPromptSpecial = prompt("Do you want your password to have special characters? Type YES or NO");


//Alerts the user that a password has been generated
var passwordGeneratedAlert = alert("Your password has been generated!");

//end password prompts for Password Generations//var charactersLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var charactersUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var specialCharacters = ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "'\'", "]", "^", "_", "`", "{", "|", "}", "~", "="];

//End characters for Password Generations//

//function for generating password//







// Make object for password
// have arrays for all characters under password
// have a function to pull from each array specified by user 


// */