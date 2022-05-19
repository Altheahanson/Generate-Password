// declare variables
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = '0123456789';
let specialChar = '!@#$%^&*=-_';




// Assignment Code
let generateBtn = document.querySelector("#generate");
function generatePassword(){
  console.log("Thanks for clicking!")
//1 Prompt the user for password criteria
   let passwordLength = window.prompt("How many characters do you want in your password?");
   console.log("passwordLength",passwordLength);
   //   password length 8 < 128
   console.log("if statement" ,passwordLength < 8 || passwordLength > 128 );
   if (passwordLength < 8 || passwordLength > 128 ) {
     passwordLength = window.prompt("Please enter charters between 8 and 128");
     console.log("passwordlength", passwordLength );
   }

//   lowercase, uppercase, numeric, and/or special characters
   let promptLowerCase = window.prompt("Would you like to use small letters?");
   console.log("promptLowerCase",promptLowerCase);

   let promptUpperCase = window.prompt("Would you like to use alpha letters?");
   console.log("promptUpperCase",promptUpperCase);

   let promptNumbers = window.prompt("Would you like to use a number?");
   console.log("promptNumbers",promptNumbers);

   let promptSpecialChar = window.prompt("Would you like to use special characters?");
   console.log("promptSpecialChar",promptSpecialChar);





//2 validate the input   

//3 Generate password based on selected criteria



//4 display generated password on the page
  return "Generated password goes here";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

