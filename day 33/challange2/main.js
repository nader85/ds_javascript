var nrSelected = document.getElementById("nrSelect").value;
var guess = document.getElementById("btnGuess");
var guessNr = document.getElementById("guessNr");
var opcionet = document.getElementById("opcionet");
guess.onclick = function(){
		var count = 1;
		var guessNumber = false;
        var listOfNumbers = "";
		while(guessNumber == false){
        var randomNr = Math.floor(Math.random()*6);
        listOfNumbers+=", " + randomNr;
        if(nrSelected == randomNr) {
            guessNumber = true;
        }
            count++;
        }
        guessNr.innerHTML = count + " Times guessed !";
        opcionet.innerHTML = listOfNumbers;

}