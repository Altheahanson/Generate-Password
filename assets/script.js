// declare variables
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let specialChar = "!@#$%^&*=-_";

let allChar = "";



// Assignment Code
let generateBtn = document.querySelector("#generate");
function generatePassword() {
  console.log("Thanks for clicking!")
  //1 Prompt the user for password criteria
  let passwordLength = window.prompt("How many characters do you want in your password?");
  console.log("passwordLength", passwordLength);
  //   password length 8 < 128
  console.log("if statement", passwordLength < 8 || passwordLength > 128);
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Select a number between 8 and 128");
    return;
  }

  //   lowercase, uppercase, numeric, and/or special characters
  let promptLowerCase = window.confirm("Would you like to use lower Case?");
  console.log("promptLowerCase", promptLowerCase);

  let promptUpperCase = window.confirm("Would you like to use upper Case");
  console.log("promptUpperCase", promptUpperCase);

  let promptNumbers = window.confirm("Would you like to use a number?");
  console.log("promptNumbers", promptNumbers);

  let promptSpecialChar = window.confirm("Would you like to use special characters?");
  console.log("promptSpecialChar", promptSpecialChar);


  //2 validate the input   

  if (promptLowerCase === true) {
    allChar = allChar + lowerCase;
  }
  if (promptUpperCase === true){
    allChar = allChar + upperCase;
  }
  if(promptNumbers === true){
    allChar = allChar + numbers;
  }
  if(promptSpecialChar === true){
    allChar = allChar + specialChar;
  }
  console.log("no slection", promptLowerCase == false && promptUpperCase == false && promptNumbers == false && promptSpecialChar == false);

  // check to ensure at least one criteria is selected
  if (promptLowerCase == false && promptUpperCase == false && promptNumbers == false && promptSpecialChar == false) {
    alert("At Least one criteria must be selected");
    return;
    
  }

  //3 Generate password based on selected criteria
  var readyPassword = [];
  var fakePassword = allChar.split("");
  console.log(fakePassword);
  for (i = 0; i < passwordLength; i++) {
    var randomPassword = fakePassword[Math.floor(Math.random() * fakePassword.length)];
    readyPassword.push(randomPassword);
  }
  console.log(randomPassword);
  console.log(readyPassword);



  //4 display generated password on the page
  return readyPassword.join("");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

