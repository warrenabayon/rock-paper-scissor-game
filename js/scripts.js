
let userCounter = 0;
let comCounter = 0;


function computerPick () {
    const randomNumber = Math.random();
    const pick = (randomNumber <= 1/3) ? 'Rock' : 
                 (randomNumber <= 2/3) ? 'Paper' : 'Scissor';
    return pick;
}

// console.log(computerPick());


function playGame (userPick, comPick) {
    
    const uPick = userPick.toUpperCase();
    const cPick = comPick.toUpperCase();
    let result = '';


    if (uPick === 'ROCK') {
        if (cPick === 'ROCK') {
            result = 'DRAW';
        } else if (cPick === 'PAPER') {
            result = 'COMPUTER WIN';
            comCounter++;
        } else if (cPick === 'SCISSOR') {
            result = 'YOU WIN';
            console.log(addScore());
        }
    } else if (uPick === 'PAPER') {
        if (cPick === 'ROCK') {
            result = 'YOU WIN';
            console.log(addScore());
        } else if (cPick === 'PAPER') {
            result = 'DRAW';
        } else if (cPick === 'SCISSOR') {
            result = 'COMPUTER WIN';
            comCounter++;
        }
    } else if (uPick === 'SCISSOR') {
        if (cPick === 'ROCK') {
            result = 'COMPUTER WIN';
            comCounter++;
        } else if (cPick === 'PAPER') {
            result = 'YOU WIN';
            console.log(addScore());
        } else if (cPick === 'SCISSOR') {
            result = 'DRAW';
        }
    }



  

    //showing the output
    const userPickTxt = document.querySelector('.u-pick')
    const comPickTxt = document.querySelector('.c-pick');
    const winnerTxt = document.querySelector('.winner');
    const userCount = document.querySelector('.user-score h3');
    userPickTxt.textContent = uPick;
    comPickTxt.textContent = cPick;
    winnerTxt.textContent = result;
    userCount.textContent = userCounter;
   
    
    return result;
}



//add score
const addScore =(function (){ // self-invoking function
    let score = 0;
    return function plus(){
        score++; 
        return score;
    }                     
})();



// console.log( playGame('ROCK', computerPick()));

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

