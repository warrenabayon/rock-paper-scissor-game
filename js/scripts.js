


function computerPick () {
    const randomNumber = Math.random();
    const pick = (randomNumber <= 1/3) ? 'Rock' : 
                 (randomNumber <= 2/3) ? 'Paper' : 'Scissor';
    return pick;
}

// console.log(computerPick());


function playGame (playerPick, comPick) {
    
    const pPick = playerPick.toUpperCase();
    const cPick = comPick.toUpperCase();
    let result = '';
    const playerScore = document.querySelector('.score .player');
    const computerScore = document.querySelector('.score .computer');


    if (pPick === 'ROCK') {
        if (cPick === 'ROCK') {
            result = 'DRAW';
        } else if (cPick === 'PAPER') {
            result = 'COMPUTER WIN';
            
            computerScore.textContent = addScoreComputer();
            
        } else if (cPick === 'SCISSOR') {
            result = 'YOU WIN';
            playerScore.textContent = addScorePlayer();
        }
    } else if (pPick === 'PAPER') {
        if (cPick === 'ROCK') {
            result = 'YOU WIN';
            playerScore.textContent = addScorePlayer();
        } else if (cPick === 'PAPER') {
            result = 'DRAW';
        } else if (cPick === 'SCISSOR') {
            result = 'COMPUTER WIN';
            computerScore.textContent = addScoreComputer();
        }
    } else if (pPick === 'SCISSOR') {
        if (cPick === 'ROCK') {
            result = 'COMPUTER WIN';
            computerScore.textContent = addScoreComputer();
        } else if (cPick === 'PAPER') {
            result = 'YOU WIN';
            playerScore.textContent = addScorePlayer();
        } else if (cPick === 'SCISSOR') {
            result = 'DRAW';
        }
    }


    //showing the output
    const col = document.querySelector('.col');
    const score = document.querySelector('.score');
    const container = document.querySelector('.container');
    const playerPickTxt = document.querySelector('.p-pick');
    const comPickTxt = document.querySelector('.c-pick');
    const resultTxt = document.querySelector('.result');
    const winnerTxt = document.createElement('h2');
    playerPickTxt.textContent = pPick;
    comPickTxt.textContent = cPick;
    resultTxt.textContent = result;

    
    //check the winner
    if (playerScore.textContent === '3'){
        winnerResult('Player');     
        

    } else if (computerScore.textContent === '3') {
        winnerResult('Computer'); 
    
        
    }

    function winnerResult (winner) {

        winnerTxt.textContent = `${winner} Wins`;
        score.setAttribute('class', 'score hide')
        col.setAttribute('class', 'col hide')
        container.appendChild(winnerTxt);
        reset();
        return `${winner} Wins`;

    }


    function reset() {
        const resetBtn = document.createElement('button');
        resetBtn.setAttribute('class', 'reset');
        resetBtn.textContent = 'Reset';
        container.appendChild(resetBtn);

        resetBtn.addEventListener('click', () => {

            window.location.reload();
        })
    }



    
    return result;
}



//add score
const addScorePlayer =(function (){ // self-invoking function
    let score = 0;
    return function plus(){
        score++; 
        return score;
    }  
    ;                   
})();

const addScoreComputer =(function (){ // self-invoking function
    let score = 0;
    return function plus(){
        score++; 
        return score;
    }                     
})();




    const rockBtn = document.querySelector('#rock');
    const paperBtn = document.querySelector('#paper');
    const scissorBtn = document.querySelector('#scissor');

    rockBtn.addEventListener('click', () => playGame('Rock', computerPick()));
    paperBtn.addEventListener('click', () => playGame('Paper', computerPick()));
    scissorBtn.addEventListener('click', () => playGame('Scissor', computerPick()));






    




/*

//self-invoking functions // runs without calling (function (){ code here})();

const add = (
    function(){
        let counter = 0;
        return function plus(){
            counter++;
            return counter;
        }
        
    } ) ();






function myFunction(){
    document.getElementById('demo').innerHTML= add();
}
*/

