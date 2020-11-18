
// functions that checks if a word is a palindrome
function isPalindrome(word) {
   return word.split("").reverse().join("") == word;
}

var button = document.getElementById("check-palindrome");
button.addEventListener("click", function() {
   // take value from input
   var word = document.getElementById("palindrome").value.replace(/\s/g, "");
   // check palindrome validity
   var message = isPalindrome(word) ? " is a palindrome." : " is not a palindrome.";
   // show answer
   document.getElementById("answer").innerHTML = "The word " + "<b>" + word + "</b>" + message;
})


var playButton = document.getElementById("play-button");
playButton.addEventListener("click", function() {
   // take value from input
   var value = document.querySelector('input[name="even-odd"]:checked').value;
   var userNumber = parseInt(document.getElementById("number").value);
   var computerNumber = Math.floor(Math.random() * 5) + 1;
   var sum = userNumber + computerNumber;

   if (sum % 2 == 0 && value == "even" || sum % 2 == 1 && value == "odd") {
      console.log("Vince l'utente");
   } else {
      console.log("Vince il pc");
   }


})
