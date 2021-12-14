const passwordCharacteristics = {
  charactersLowerCase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  charactersUpperCase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,],
  specialCharacters: ["!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "'\'", "]", "^", "_", "`", "{", "|", "}", "~", "="]
};
var totalArray = []

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

function generatePassword() {
  var resObject = askUser()
  console.log(resObject);
  if (resObject.passwordLowercaseChoice) {
    totalArray = totalArray.concat(passwordCharacteristics.charactersLowerCase)
  }
  if (resObject.passwordUpperCaseChoice) {
    totalArray = totalArray.concat(passwordCharacteristics.charactersUpperCase)
  }
  if (resObject.passwordNumeralChoice) {
    totalArray = totalArray.concat(passwordCharacteristics.numbers)
  }
  if (resObject.passwordSpecialCharChoice) {
    totalArray = totalArray.concat(passwordCharacteristics.specialCharacters)
  }
  var pass = resObject.passwordLengthChoice;
  var yourPass = "";
for (var i =0; i < pass; i++){
var index = Math.floor(Math.random()*totalArray.length);
var digit = totalArray[index];
yourPass = yourPass + digit;
console.log(yourPass);
}

  return yourPass;
}
//---------------------------------Starter code^

//for loop for password length
// for (var i = 0; i < passwordText.length; i++) {
//   prompt(document.querySelector(passwordTest[i]));
// }


//Character choice arrays -----------

//End characters for Password Generations//
//password prompts for Password Generations//
function askUser() {
  var passwordLengthChoice = parseInt(prompt("How many characters would you like your password to be? Enter a number between 8 and 128"));
  if (passwordLengthChoice < 8 || passwordLengthChoice > 128 || isNaN(passwordLengthChoice)) {
    alert("Please select a valid number.")
    return;
  }


  var passwordLowercaseChoice = confirm("Do you want your password to have lowercase characters? Choose 'Ok' or 'Cancel'");
  var passwordUpperCaseChoice = confirm("Do you want your password to have uppercase characters? Choose 'Ok' or 'Cancel'");
  var passwordNumeralChoice = confirm("Do you want your password to have numbers? Choose 'Ok' or 'Cancel'");
  var passwordSpecialCharChoice = confirm("Do you want your password to have special characters? Choose 'Ok' or 'Cancel'");

  if (passwordLowercaseChoice === false && passwordUpperCaseChoice === false && passwordNumeralChoice === false && passwordSpecialCharChoice === false) {
    alert("Please select one character type")
    return;
  }

  var returnObjects = {
    passwordLengthChoice,
    passwordLowercaseChoice,
    passwordUpperCaseChoice,
    passwordNumeralChoice,
    passwordSpecialCharChoice
  }

  return returnObjects
}


