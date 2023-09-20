//
// console.log('Hello World');

//get compputer choice
//get user choice
//get result

let computerScore = 0;
let playerScore = 0;
let drawScore = 0;

// console.log(playRound('paper', getComputerChoice()));

function getComputerChoice() { //get computer choice
    let randomNumber = Math.random();
    let computerChoice = (randomNumber <= 1/3) ? 'Rock' :
        (randomNumber <= 2/3) ? 'Paper' : 
        'Scissor';       
    return computerChoice;
}

function playRound(playerSelection, computerSelection) { // compare choices // You Lose! Paper beats Rock

    let result = '';
    let playerSelect = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase(); // convert to accept text lower and uppoer case
    let computerSelect = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1).toLowerCase();
    
    // console.log(playerSelect); // check converstion
    // console.log(computerSelect);

    if (playerSelect == 'Rock') {

        if (computerSelect == 'Rock') {
            result =  `DRAW! ${playerSelect} is equal to ${computerSelect}`;
            drawScore++;
        } else if (computerSelect == 'Paper'){
            result =  `You Lose! ${playerSelect} lose to ${computerSelect}`;
            computerScore++;
        } else if (computerSelect == 'Scissor'){
            result =  `You Win! ${playerSelect} beats ${computerSelect}`;
            playerScore++;
        }

    
    } else if (playerSelect == 'Paper') {
        if (computerSelect == 'Rock') {
            result =  `You Win! ${playerSelect} beats ${computerSelect}`;
            playerScore++;
        } else if (computerSelect == 'Paper'){
            result =  `DRAW! ${playerSelect} is equal to ${computerSelect}`;
            drawScore++;
        } else if (computerSelect == 'Scissor'){
            result =  `You Lose! ${playerSelect} lose to ${computerSelect}`;
            computerScore++;
        }
        
    
    } else if (playerSelect == 'Scissor') {
        if (computerSelect == 'Rock') {
            result =  `You Lose! ${playerSelect} lose to ${computerSelec}`;
            computerScore++;
        } else if (computerSelect == 'Paper'){
            result =  `You Win! ${playerSelect} beats ${computerSelect}`;
            playerScore++;
        } else if (computerSelect == 'Scissor'){
            result =  `DRAW! ${playerSelect} is equal to ${computerSelect}`;
            drawScore++;
        }
        
    } 
    
    
    console.log(playerScore +'  ' + computerScore + '  ' + drawScore); // show the score
    return result;
    
}

// console.log(getComputerChoice());

// let string1 ='ROCK';
// let string2 = string1.charAt(0).toUpperCase() + string1.slice(1).toLowerCase();
// console.log(string2);




///for
function game(roundCount = 1) {

    for (i = 1; i <= roundCount; i++){
        // console.log(`Run: ${i}`);
        console.log(`${playRound('paper', getComputerChoice())} run:${i}`);
        
    }
    
    let finaResult = (playerScore > computerScore) ? 'PLAYER WINS OVERALL' : 'COMPUTER WINS OVERALL';
    console.log(finaResult); // show the final result

}

game(20);




