// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input\
function writePassword()
var password = generatePassword()
var passwordText = document.querySelector("#password");

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var numeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
var special = ["!", "$", "%", "^", "&", "*", "(", ")", "-", "=", "+", "[", "]", "{", "}", ",", ";", "#", ":", "@", "~", ".", "/", "<", ">", "?"]

var length = prompt("How many characters would you like to include?");

if ("8" < length < "128") {
  alert("You have selected a correct number of characters")
}
else {
  alert("Please select a number from 8-128")
}

var uppercase = confirm("Would you like to include uppercase characters?");
alert(uppercase);

var lowercase = confirm("Would you like to include lowercase characters?");
alert(lowercase);

var numeric = confirm("Would you like to include numeric characters?");
alert(numeric);

var special = confirm("Would you like to include special characters?");
alert(special);


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);