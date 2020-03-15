// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created variables for multiple character sets that will lead to the password
function generatePassword() {
  var password = "";
  var charSet = "";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var special = "!$%^&*()-=+[]{},;#:@~./<>?";

  //Prompt for the user to select how many characters to use in the password
  var passwordLength = prompt("How many characters do you want your password to be?")
  parseInt(passwordLength, 10)
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a whole number between 8-128");
    return;
  }
  else {
    alert("You have selected a password length of " + passwordLength)
  }
  //Prompts to include character sets 
  var passUppercase = confirm("Would you like to include uppercase characters?");
  if (passUppercase === true) {
    charSet = charSet + uppercase
    alert("The password will include Uppercase letters");
  }

  var passLowercase = confirm("Would you like to include lowercase characters?");
  if (passLowercase === true) {
    charSet = charSet + lowercase
    alert("The password will include Lowercase letters");
  }
  var passNumeric = confirm("Would you like to include numeric characters?");
  if (passNumeric === true) {
    charSet = charSet + numeric
    alert("The password will include Numeric characters");
  }

  var passSpecial = confirm("Would you like to include special characters?");
  if (passSpecial === true) {
    charSet = charSet + special
    alert("The password will include Special characters");
  }

  if (passSpecial === false && passNumeric === false && passLowercase === false && passUppercase === false) {
    alert("You must select one of the character sets!");
    return;
  }

  //for loop to create the actual password
  for (var i = 0; i < passwordLength; i++) {
    var password = password + charSet[Math.floor(Math.random() * charSet.length)];
  }
  return password;
}
// Write password to the #password input\
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);