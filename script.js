// Assignment Code
let generateBtn = document.querySelector("#generate");

//Generate password based on letter banks 
const generatePassword = () => {
  //prompt user for length, make sure it's within range
  let lengthIsOk = false;
  let passwordLength = 0;
  while (lengthIsOk === false) {
    passwordLength = prompt("Please type a password length from 8-128 characters");
    if (passwordLength >= 8 && passwordLength <= 128) {
      lengthIsOk = true;
    } else {
      lengthIsOk = false;
    };
  };

  //prompt user for chosen banks
  let isLowercase = false;
  let isUppercase = false;
  let isNumeric = false;
  let isSpecial = false;
  let hasBank = false;

  while (!hasBank) {
    if (confirm("Would you like to include lowercase letters?")) {
      isLowercase = true;
      hasBank = true;
    } else (isLowercase = false);
    if (confirm("Would you like to include uppercase letters?")) {
      isUppercase = true;
      hasBank = true;
    } else (isUppercase = false);
    if (confirm("Would you like to include numbers?")) {
      isNumeric = true;
      hasBank = true;
    } else (isNumeric = false);
    if (confirm("Would you like to include special characters?")) {
      isSpecial = true;
      hasBank = true;
    } else (isSpecial = false);
    if(!hasBank){
      alert("Please select at least one bank of characters!")
    }
  }

  let availableCharacters = [];
  const lowercaseBank = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", 
"k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const uppercaseBank = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", 
"K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  const numericBank = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const specialBank = ["!", "#", "$", "%", "&", "(", ")", "*", "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"];

  if(isLowercase){
    availableCharacters.push(...lowercaseBank);
  }
  if(isUppercase){
    availableCharacters.push(...uppercaseBank);
  }
  if(isNumeric){
    availableCharacters.push(...numericBank);
  }
  if(isSpecial){
    availableCharacters.push(...specialBank);
  }

  let newPassword = "";
  let chooseRandomCharacter;

  for (let i = 0; i < passwordLength; i++){
    chooseRandomCharacter = availableCharacters[Math.floor(Math.random()*availableCharacters.length)];
    newPassword = newPassword + chooseRandomCharacter;
  }
  return newPassword;
}




// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

