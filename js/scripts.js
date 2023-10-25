
const rpsGame = () => {

  let playerScore = 0;
  let computerScore = 0;
  let movesLeft =  5;



  const getComputerChoice = () => {
    const weaponsChoice = ['ROCK', 'PAPER', 'SCISSOR'];
    const randomNumber = Math.floor( Math.random() * weaponsChoice.length);
    return  weaponsChoice[randomNumber];  
  }  

  const playGame = (playerChoice) => {
    const ComputerWeapon = getComputerChoice().toUpperCase();
    const playerWeapon = playerChoice.toUpperCase();
    let result = '';

    if (playerWeapon === 'ROCK') {
        if (ComputerWeapon === 'ROCK') {
          result = 'THE GAME IS DRAW';
        } else if (ComputerWeapon ==='PAPER') {
          result = 'COMPUTER WIN';
          computerScore++;
        } else if (ComputerWeapon === 'SCISSOR') {
          result = 'PLAYER WIN';
          playerScore++;
        }
        
      } else if (playerWeapon === 'PAPER') {
        if (ComputerWeapon === 'ROCK') {
          result = 'PLAYER WIN';
          playerScore++;
        } else if (ComputerWeapon ==='PAPER') {
          result = 'THE GAME IS DRAW';     
        } else if (ComputerWeapon === 'SCISSOR') {
          result = 'COMPUTER WIN';
          computerScore++;
        }

      } else if (playerWeapon === 'SCISSOR') {
        if (ComputerWeapon === 'ROCK') {
          result = 'COMPUTER WIN';
          computerScore++;
        } else if (ComputerWeapon ==='PAPER') {
          result = 'PLAYER WIN';   
          playerScore++;  
        } else if (ComputerWeapon === 'SCISSOR') {
          result = 'THE GAME IS DRAW';
          
        }
      }


    
    

    const getResult = ()=> {
      movesLeft--;
      //display
      const resultTxt = document.querySelector('.result');
      resultTxt.textContent = result;
      const playerPickTxt = document.querySelector('.p-pick');
      playerPickTxt.textContent = playerWeapon;
      const computerPickTxt = document.querySelector('.c-pick');
      const movesTxt = document.querySelector('.moves');
      movesTxt.textContent = movesLeft;
      const pScoreTxt = document.querySelector('.score .player');
      pScoreTxt.textContent = playerScore;
      const cScoreTXT = document.querySelector('.score .computer');
      cScoreTXT.textContent = computerScore;

      //check the overall winner

      function checkWinner (){
        if (movesLeft <= 0) {

            const getDetails = (winner) => {
              const scoreClass = document.querySelector('.score');
              scoreClass.setAttribute('class', 'score hide');
              const colClass = document.querySelector('.col');
              colClass.setAttribute('class', 'col hide');
              const resetBtn = document.createElement('button');
              resetBtn.setAttribute('class', 'reset');
              resetBtn.textContent = 'Reset';

              const gameOverTxt = document.createElement('h2');
              gameOverTxt.textContent = `GAME OVER ${winner} WINS`;
              
              const containerClass = document.querySelector('.container');
              containerClass.appendChild(gameOverTxt);
              containerClass.appendChild(resetBtn);
                           

              resetBtn.addEventListener('click', () => {
                window.location.reload();
              })

            };


            if (playerScore > computerScore) {
              getDetails('PLAYER');

            } else {
              getDetails('COMPUTER');
            }

        } 
      }

      checkWinner();

    };


    getResult();
  
  };




    //buttons
    const starGame = ()=> {
      const rockBtn = document.querySelector('#rock');
      const paperBtn = document.querySelector('#paper');
      const scissorkBtn = document.querySelector('#scissor');
      rockBtn.addEventListener('click', () => playGame('Rock'));
      paperBtn.addEventListener('click', () => playGame('Paper'));
      scissorkBtn.addEventListener('click', () => playGame('Scissor'));
    }
    
    starGame();
 
};


rpsGame();
// rpsGame();