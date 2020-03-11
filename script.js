// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input\
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lowercase = "abcdefghijklmonpqrstuvwxyz"
var numeric = "0123456789"
var special = "!$%^&*()-=+[]{};#:@~,./<>?"

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
