let rock = 1;
let paper = 2;
let scissors = 3;
let ai = 0;
let h = 0;
let maxWin = 3;

function playerChoice() {
    let plchoice = prompt("Please choose rock (1), paper (2), or scissors (3).");

    plchoice = plchoice.toLowerCase()

    if (plchoice == "rock" || plchoice == "1") {
        return 1
    }
    else if (plchoice == "paper" || plchoice == "2") {
        return 2
    }
    else if (plchoice == "scissors" || plchoice == "3") {
        return 3
    }
    else {
        return playerChoice()  // Recursive call can lead to stack overflow if user never provides a valid input.
    }
}

function computerChoice() { 
    let choices = [1, 2, 3]; 
    let choice = choices[Math.floor(Math.random() * choices.length)]; 
    return choice;
}

while (ai < maxWin && h<maxWin ) {

    let huchoice = playerChoice()

    console.log("The human choice is: " + huchoice)

    let aichoice = computerChoice()

    console.log("The AI choice is: " + aichoice);

    function winner() {
        let result;
        if (huchoice == aichoice) {
            return result = "Tie."
        }
        else if (huchoice == "1" && aichoice == "2") {  // Comparison with strings instead of numbers.
            return result = "Computer wins."
        }
        else if (huchoice == "1" && aichoice == "3") {  // Comparison with strings instead of numbers.
            return result = "Human wins."
        }
        else if (huchoice == "2" && aichoice == "1") {  // Comparison with strings instead of numbers.
            return result = "Human wins."
        }
        else if (huchoice == "2" && aichoice == "3") {  // Comparison with strings instead of numbers.
            return result = "Computer wins."
        }
        else if (huchoice == "3" && aichoice == "1") {  // Comparison with strings instead of numbers.
            return result = "Computer wins."
        }
        else if (huchoice == "3" && aichoice == "2") {  // Comparison with strings instead of numbers.
            return result = "Human wins."
        }
    }

    let gameRes = winner()

    if (gameRes == "Computer wins.") {
        ai++
    }

    else if (gameRes == "Human wins.") {
        h++
    }

    console.log(ai, h)
}

if (ai == 3){
    console.log("Computer wins!")
}
else if (h == 3){
    console.log("Human wins!")
}



