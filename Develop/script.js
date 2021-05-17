// FUNCTION LIST //
// getPasswordLength() - prompts user for password length //
// checkpswdlength() - checks to see if user selected a length of 8-128 characters //
// generateCharacterArray() -  Ask user which character sets to include, generate array from which to create password, generates password, then calls writePassword() //
// generatePasswordArray() - generates password and pushes characters to generatedPassword 
// writePassword() - Converts array to string, removes commas, displays password on screen, and empties finalPassword[] //


// VARIABLES //
var generateBtn = document.querySelector("#generate"); // assigns the variable generateBtn to the element with #generate //
var lc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uc = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var nu = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var sc = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "`", "{", "}", "|", "<", ">"];
var ulc = []; // this is the boolean array used to indicate if lower case characters have been included //
var uuc = []; // this is the boolean array used to indicate if upper case characters have been included //
var unu = []; // this is the boolean array used to indicate if numbers have been included //
var usc = []; // this is the boolean array used to indicate if special characters characters have been included //
var pswdcharacterset = [];  // pswdcharacterset is the array from which to create the password //
var pswdLength = []; // desired length of password //
var generatedPassword = []; // this is the generated password //
var password = []; // this is the password converted from an opject to a string //


// FUNCTIONS //
// Ask user how many characters to use in the password //
function getPasswordLength(){
  console.log("Execute getPasswordLength()");

  // The following prompts the user for the number of characters and stores the number as pswdLength //
    pswdLength = prompt("How many characters would you like the password to be? (8-128)");
    pswdLength = parseInt(pswdLength);

    // Executes chkPswordLenth to to see if number in the range 8 - 12 //
    chkPswordLenth();

} // end of getPasswordLength() //

// Check to see if number in the range 8 - 128 //
function chkPswordLenth() {

  if (pswdLength > 7 && pswdLength < 129) {
    desiredLength = pswdLength;

    console.log("Execute chkPswordLenth()");
    console.log("Length meets criteria");
    console.log("Password should be " +desiredLength  + " characters");

    // if number is in range then executes generateCharacterArray()
    generateCharacterArray();

    } else {
      getPasswordLength();
    }

} // end of chkPswordLenth() //

// Ask user which character sets to include //
function generateCharacterArray() {
  console.log("Execute generateCharacterArray()");
  pswdcharacterset = [""]; // clears array in the event of multiple executions //

  // Asks users which character sets to include //
  ulc = confirm("Do you want to include lowercase characters in your password?\nPress OK for yes and Cancel for No.");
  if(ulc) {
    pswdcharacterset = lc.concat(pswdcharacterset);
    console.log("Include lowercase letters");
    }
  
  uuc = confirm("Do you want to include uppercase characters in your password?\nPress OK for yes and Cancel for No.");
  if(uuc) {
    pswdcharacterset = uc.concat(pswdcharacterset);
    console.log("Include uppercase letters");
    }

  unu = confirm("Do you want to include numbers in your password?\nPress OK for yes and Cancel for No.");
  if(unu) {
    pswdcharacterset = nu.concat(pswdcharacterset);
    console.log("Include numbers");
  }

  usc = confirm("Do you want to include special characters in your password?\nPress OK for yes and Cancel for No.");
  if(usc) {
    pswdcharacterset = sc.concat(pswdcharacterset);
    console.log("Include special characters");
  }

  // check to ensure at least one character set was chosen //
  if (!ulc && !uuc && !unu && !usc) {
    alert("You must choose at least one type of character to include.  Please start again");
    getPasswordLength();

    } else {
      generatePasswordArray();
    }

} //end generateCharacterArray

// Generates password and pushes to generatedPassword //
function generatePasswordArray() {

  // generates password and pushes characters to generatedPassword //
  for(i=0; i < pswdLength; i++){
    generatedPassword.push(pswdcharacterset[Math.floor(Math.random() * pswdcharacterset.length)]);
  };

  writePassword();

} // end of generatePasswordArray() //

// Converts array to string, removes commas, displays password on screen, and empties finalPassword[] //
function writePassword() {

  console.log("Execute writePassword");

  // Converts array to a string //
  password = generatedPassword.join();

  // Removes commas from string //
  var finalPassword = password.replace(/,/g,"");

  // Displays password on screen //
  var passwordText = document.querySelector("#password");
  passwordText.value = finalPassword;

  // Clears the array in the event of multiple executions //
  console.log("Emptying finalPassword[]")
  generatedPassword.splice(0, generatedPassword.length);

  console.log("End of script until another click");
       
}  // End of writePassword() //


// EXECUTION //
generateBtn.addEventListener("click", getPasswordLength);