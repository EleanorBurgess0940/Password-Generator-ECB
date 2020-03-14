// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input\
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "[", "]", "{", "}", ",", ";", "#", ":", "@", "~", ".", "/", "<", ">", "?"]


var passwordLength = prompt("How many characters do you want your password to be?")
if (passwordLength < 8 || passwordLength > 128) {
  alert("password length should be between 8 - 128, try again");
  prompt("How many characters do you want your password to be?");
}
else {
  alert("you have chosen a password length of " + passwordLength);
}

var passUppercase = confirm("Would you like to include uppercase characters?");
if (passUppercase === true) {
  alert("The password will include Uppercase letters");
}

var passLowercase = confirm("Would you like to include lowercase characters?");
if (passLowercase === true) {
  alert("The password will include Lowercase letters");

  var passNumeric = confirm("Would you like to include numeric characters?");
  if (passNumeric === true) {
    alert("The password will include Numeric characters");
  }

  var passSpecial = confirm("Would you like to include special characters?");
  if (passSpecial === true) {
    alert("The password will include Special characters");
  }
}