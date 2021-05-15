// Assignment Code
var generateBtn = document.querySelector("#generate");
var upper [];
var lower[];
var numbers=[1,2,3,4,5,6,7,8,9,0];
var pass=[];


// Write password to the #password input
function writePassword() {
var codelen = window.prompt("Please enter code length between 8 and 128")

console.log(codelen,upperCase,lowerCase,symbol)
if(codelen < 8 || codelen > 128){
  window.alert("Number must be between 8 and 128")
}
else {
  var upperCase = window.confirm("Uppercase")
var lowerCase = window.confirm("LowerCase")
var symbol = window.confirm("Symbols") 
  for (let i = 0; i < codelen; i++) {
    var index = Math.floor(Math.random() * numbers.length);
  var computerChoice = numbers[index];
  console.log(computerChoice);
  pass.push(computerChoice);
  console.log(pass);
     }
}
var pwstring = pass.join('');
console.log(pwstring)


  var password = pwstring;
  var passwordText = document.querySelector("#password");
  
 passwordText.setAttribute("placeholder",password)

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
