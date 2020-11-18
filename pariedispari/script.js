function agent() {
   return Math.floor(Math.random() * 5) + 1;
}

var playButton = document.getElementById("play-button");
playButton.addEventListener("click", function() {
   // take even or odd value from radio buttons
   var value = document.querySelector('input[name="even-odd"]:checked').value;
   // take number from user
   var userNumber = parseInt(document.getElementById("number").value);
   // play random agent
   var computerNumber = agent();
   document.getElementById("pc").innerHTML = computerNumber;
   // sum both values
   var sum = userNumber + computerNumber;
   // check who is the winner
   if (sum % 2 == 0 && value == "even" || sum % 2 == 1 && value == "odd") {
      document.getElementById("winner").innerHTML = "YOU ARE THE WINNER!";
   } else {
      document.getElementById("winner").innerHTML = "SORRY, COMPUTER WON! TRY AGAIN!";
   }


})
