let userChoice;
let aiChoice;
let result;
let gamesPlayed = 0;
let winCount = 0;

function rockChoice() {
    userChoice = 'rock';
    sendUserChoice(userChoice), changeImgUser('rock'), gameCount(1),  getAiChoice(), scroll();
}

function paperChoice() {
    userChoice = 'paper';
    sendUserChoice(userChoice), changeImgUser('paper'), gameCount(1),  getAiChoice();
}

function scissorsChoice() {
    userChoice = 'scissors'
    sendUserChoice(userChoice), changeImgUser('scissors'), gameCount(1),  getAiChoice(), scroll();
}

function sendUserChoice() {
    showResults(userChoice, aiChoice, result);
    compare(userChoice, aiChoice);
}

function scroll() {
    const scrollTo = document.querySelector('#swap');
    scrollTo.scrollIntoView();
}

const getAiChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    
    switch (randomNumber) {
        case 0: 
            aiChoice = 'rock';
            return sendAiChoice(aiChoice), changeImgAi('rock');
        
        case 1:
            aiChoice = 'paper';
            return sendAiChoice(aiChoice), changeImgAi('paper');
            
        case 2:
            aiChoice = 'scissors';
            return sendAiChoice(aiChoice), changeImgAi('scissors');
        default:
            aiChoice = 'error';    
            return sendAiChoice(aiChoice), changeImgAi('scissors');
    } 
}

function sendAiChoice() {
    compare(userChoice, aiChoice);
    showResults(userChoice, aiChoice, result);
}   

function compare(userChoice, aiChoice) {
    if (userChoice === aiChoice) {
        result = 'Draw!';
        return showResults(result) 
    } else if (((userChoice === 'rock' && aiChoice === 'scissors') || (userChoice === 'paper' && aiChoice === 'rock') || (userChoice === 'scissors' && aiChoice === 'paper'))) {
        result = 'You win';
        return showResults(result), numberOfWins(result);
    } else {
        result = 'You lost';
        return showResults(result);
    }
}

function gameCount() {
    gamesPlayed += 1;
    return showResults(gamesPlayed);
}

function numberOfWins() {
    winCount += 1;
    return showResults(winCount);
}

function showResults() {
    const displayResult = document.querySelector('#swap').innerHTML = 
    `<p id="#aa" class="roboto bold result">${result}</p>  
    <p class="roboto result-user-ai">You picked: <br> ${userChoice}</p>
    <p class="roboto result-user-ai">The computer picked: <br> ${aiChoice}</p>
    <p class="roboto game-count">You played: <br> ${gamesPlayed} games</p>
    <p class="roboto game-win">You won: <br> ${winCount} games</p>
    <button id="restart-btn" onClick="restart()" class="roboto restart btn white">Restart</button>`;  
}

function changeImgUser(option) {
    if (option === 'rock') {
        document.querySelector('#rock-btn').style.display =  'none';
        document.querySelector('#scissors-btn').style.display =  'none';
    } else if (option === 'paper') {
        document.querySelector('#rock').src = "images/paper.png";
        document.querySelector('#rock-heading').textContent = 'paper';
        document.querySelector('#rock-btn').style.display =  'none';
        document.querySelector('#scissors-btn').style.display =  'none';
        return;
    } else {
        document.querySelector('#rock').src = "images/scissors.png";
        document.querySelector('#rock-heading').textContent = 'scissors';
        document.querySelector('#rock-btn').style.display =  'none';
        document.querySelector('#scissors-btn').style.display =  'none';
        return;   
    }
}

function changeImgAi(option) {
    if (option === 'rock') {
        document.querySelector('#scissors').src = "images/rock.png";
        document.querySelector('#scissors-heading').textContent = 'rock';
    } else if (option === 'paper') {
        document.querySelector('#scissors').src = "images/paper.png";
        document.querySelector('#scissors-heading').textContent = 'paper';
        return;
    } else {
        return;
    }
}    

function restart() {
    userChoice = null;
    aiChoice = null;
    result = null;     
    
    document.querySelector('#restart-btn').style.display = 'none';
    document.querySelector('#rock').src = "images/rock.png";
    document.querySelector('#rock-btn').style.display =  'inline-block';
    document.querySelector('#rock-heading').textContent = 'rock';
    document.querySelector('#scissors').src = "images/scissors.png";
    document.querySelector('#scissors-btn').style.display =  'inline-block';
    document.querySelector('#scissors-heading').textContent = 'scissors';
    document.querySelector('#swap').innerHTML = 
    `<img id="paper" class="choice" src="images/paper.png" alt="Paper.">
    <figcaption id="paper-heading" class="oswald fig-caption">Paper</figcaption>
    <button onclick="paperChoice(); showResults()" class="btn white">Choose</button> `
    document.querySelector('#paper-heading').textContent = 'paper';
   
    return userChoice, aiChoice, result;     
}