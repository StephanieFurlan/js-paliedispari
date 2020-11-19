
// functions that checks if a word is a palindrome
function isPalindrome(word) {

   var emptyWord = "";
   for (var i = 0; i < word.length; i++) {
      if (word[i] != "") {
         emptyWord += word[i];
      }
   }

   for (var i = 0; i < emptyWord.length; i++) {
      if (emptyWord[i] != emptyWord[emptyWord.length - i - 1]) {
         return false
      }
   }
   return true;
   // return word.split("").reverse().join("") == word;
}

var button = document.getElementById("check-palindrome");
button.addEventListener("click", function() {
   // take value from input
   var inputWord = document.getElementById("palindrome");

   var word = inputWord.value.replace(/\s/g, "");
   // check palindrome validity
   var message = isPalindrome(word) ? " is a palindrome." : " is not a palindrome.";
   // show answer
   document.getElementById("answer").innerHTML = "The word " + "<b>" + word + "</b>" + message;
   inputWord.value = "";
})
