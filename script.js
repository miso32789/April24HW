// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function generatePassword(){
  var lengthpassword= prompt("lengthpassword");
  console.log (lengthpassword)

  if (isNaN(lengthpassword)){
    alert("Please select a numeric value more than 8!");
    return null
  }

  if (lengthpassword < 8){
    alert("Password must be more than 8 characters!");
    return null
  }

  if (lengthpassword > 126){
    alert("Password too long");
    return null
  }
  
  var selectedcharacters = "";
  
  var password= "";

  var confirmuppercase= confirm("Do you want uppercase?");
  //console.log(confirmuppercase)

  if (confirmuppercase){
    selectedcharacters = selectedcharacters + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  var confirmlowercase= confirm("Do you want lowercase?");
//console.log (confirmlowercase)

  if (confirmlowercase){
    selectedcharacters = selectedcharacters + "abcdefghijklmnopqrstuvwxyz";
  }

  var confirmnumeric= confirm("Do you want to include numbers?");
  //console.log(confirmnumeric)

  if (confirmnumeric){
    selectedcharacters = selectedcharacters + "0123456789";
  }

  var confirmspecialcharacters= confirm("Do you want to include special characters?");
  //console.log(confirmnumeric)

  if (confirmspecialcharacters){
    selectedcharacters = selectedcharacters + "!@#$%^&*_-+=";
  }
  if (!confirmuppercase && !confirmlowercase && !confirmnumeric && !confirmspecialcharacters){
    alert("Please select something!")
    return null
  }
  for (let i=0; i < lengthpassword; i++){
    password += selectedcharacters[Math.floor(Math.random() * selectedcharacters.length)]
  }

  return password
}
//console.log(generateBtn)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  if (password != null) {
    passwordText.innerHTML = password;
  } 
  
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); 
