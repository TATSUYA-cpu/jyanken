const choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultText = document.getElementById('result-text');
const choiceButtons = document.querySelectorAll('.choice-btn');
const resetButton = document.getElementById('reset-btn');

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'draw';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    }

    return 'computer';
}

function updateScore(winner) {
    if (winner === 'player') {
        playerScore++;
        playerScoreElement.textContent = playerScore;
    } else if (winner === 'computer') {
        computerScore++;
        computerScoreElement.textContent = computerScore;
    }
}

function displayResult(playerChoice, computerChoice, winner) {
    const choiceEmojis = {
        rock: '✊',
        paper: '✋',
        scissors: '✌️'
    };

    if (winner === 'draw') {
        resultText.textContent = `引き分け！ あなた: ${choiceEmojis[playerChoice]} vs コンピュータ: ${choiceEmojis[computerChoice]}`;
    } else if (winner === 'player') {
        resultText.textContent = `あなたの勝ち！ あなた: ${choiceEmojis[playerChoice]} vs コンピュータ: ${choiceEmojis[computerChoice]}`;
    } else {
        resultText.textContent = `コンピュータの勝ち！ あなた: ${choiceEmojis[playerChoice]} vs コンピュータ: ${choiceEmojis[computerChoice]}`;
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
    resultText.textContent = 'じゃんけんを選んでください！';
}

choiceButtons.forEach(button => {
    button.addEventListener('click', () => {
        const playerChoice = button.dataset.choice;
        const computerChoice = getComputerChoice();
        const winner = determineWinner(playerChoice, computerChoice);
        
        updateScore(winner);
        displayResult(playerChoice, computerChoice, winner);
    });
});

resetButton.addEventListener('click', resetGame); 