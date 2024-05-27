// Function to initialize the game
function initializeGame() {
    // Hide the game section
    document.querySelector(".game").style.display = "none";

    // Event listener for the "Start" button
    document.getElementById("start").addEventListener("click", function() {
        // Hide the menu section
        document.getElementById("menu").style.display = "none";
        // Show the game section
        document.querySelector(".game").style.display = "block";
    });

    // Event listeners for user choice buttons
    document.getElementById("rock").addEventListener("click", function() {
        playGame("rock");
    });

    document.getElementById("paper").addEventListener("click", function() {
        playGame("paper");
    });

    document.getElementById("scissors").addEventListener("click", function() {
        playGame("scissors");
    });
}

// Function to handle the user's choice and play the game
function playGame(userChoice) {
    const aiChoice = getAIChoice();
    const result = determineWinner(userChoice, aiChoice);
    displayResult(userChoice, aiChoice, result);
}

// Function to get the AI's choice
function getAIChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to determine the winner
function determineWinner(userChoice, aiChoice) {
    if (userChoice === aiChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && aiChoice === "scissors") ||
        (userChoice === "paper" && aiChoice === "rock") ||
        (userChoice === "scissors" && aiChoice === "paper")
    ) {
        return "Rez wins!";
    } else {
        return "AI wins!";
    }
}

// Function to display the game result
function displayResult(userChoice, aiChoice, result) {
    document.getElementById("result").innerText = `You chose ${userChoice}, the AI chose ${aiChoice}. ${result}`;
}

// Call the initializeGame function when the DOM is ready
document.addEventListener("DOMContentLoaded", initializeGame);
