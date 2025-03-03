let randomNum = Math.round(Math.random());
let choice = prompt("Enter your guess: Heads or Tails").toLowerCase();
if (choice === "heads" || choice === "tails") {
    if (randomNum === 0) {
        if (choice === "heads") {
            alert("The flip was heads and you chose heads...you win!");
        } else {
            alert("The flip was heads but you chose tails...you lose!");
        }
    } else {
        if (choice === "tails") {
            alert("The flip was tails and you chose tails...you win!");
        } else {
            alert("The flip was tails but you chose heads...you lose!");
        }
    }
} else {
    alert("Invalid input. Please enter 'Heads' or 'Tails'.");
}