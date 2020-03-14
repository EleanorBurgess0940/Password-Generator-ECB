// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = "";
  var charSet = "";
  var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowercase = "abcdefghijklmnopqrstuvwxyz";
  var numeric = "0123456789";
  var special = "!$%^&*()-=+[]{},;#:@~./<>?";


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
    alert("You must select one of the character sets!")
  }


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