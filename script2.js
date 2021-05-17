// Assignment Code
var generateBtn = document.querySelector("#generate");
// array for final pw


// Write password to the #password input
function writePassword() {
    // creates and resets arrays at when generate button is pressed.
    var pw = [];
    var add = [];
//  Window prompt for lenght of password
    var codelen = window.prompt("Enter length of code between 8 and 128")
//  alert if number outside of required is selected.
 if(codelen < 8 || codelen > 128){
    window.alert("Number must be between 8 and 128")
  }
  else {
    // Converts numbers to ascii then adds to array.
    function addChar  (x){
        // console.log(x);
        var char = String.fromCharCode(x);
        // console.log(char);
        pw.push(char);
    }
    // Random Number generator procudces number in ranges.
    function randomNumber(min,max){
        return Math.floor(Math.random() * (max - min) + min);
    }
    // Confirm windows for various password selections
        var upper = window.confirm("Would you like uppercase letters?   OK for yes and Cancel for no");
        if (upper){
            add.push(1);
        }
        var lower = window.confirm("Would you like lowercase letters?   OK for yes and Cancel for no");
        if (lower){
            add.push(2);
        }
        var num = window.confirm("Would you like numbers?   OK for yes and Cancel for no");
        if (num){
            add.push(3);
        }
        var special = window.confirm("Would you like special characters?  OK for yes and Cancel for no");
        if (special){
            add.push(4);
        }
        console.log(add);
        // Loop randomly generating what charaters should be in password.
        for (var i = 0; i < codelen; i++) {
                     
            var charGenerate = add[randomNumber(0,add.length)];
            console.log(charGenerate);
        switch(charGenerate){
            case 1:
                addChar(randomNumber(65,90))
                break
            case 2: 
                addChar(randomNumber(97,122))
                break
            case 3: 
                addChar(randomNumber(48,57))
                break
            case 4: 
                addChar(randomNumber(33,47))
                break
        }
            }
            console.log(pw);
          }

        //   Join password together and post to screen.
          var password = pw.join('');
          console.log(password)
  var passwordText = document.querySelector("#password");
  passwordText.setAttribute("placeholder",password)
    }  



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);