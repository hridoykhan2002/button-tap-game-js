// selecting Element from html part

const playerOne = document.querySelector(".playerOneScore");
const playerTwo = document.querySelector(".playerTwoScore");
const buttonOne = document.querySelector("#buttonOne");
const buttonTwo = document.querySelector("#buttonTwo");
const resetButton = document.querySelector("#resetButton");
const attemptRemening = document.querySelector(".attemptRemening");

let playerOneScore = 0;
let playerTwoScore = 0;
let attemptAll = 5;
let attempts = 0;


// function

const buttonValue1 = () =>{
    attempts++;
    if(attempts===5){
        buttonOne.disabled = true;
        buttonTwo.disabled = true;
    }if(attempts<6){
        playerOneScore++;
        playerOne.innerHTML = playerOneScore;
        attemptRemening.textContent = `${attemptAll-attempts}`;
    }

};



const buttonValue2 = () =>{
    attempts++;
    if(attempts===5){
        buttonOne.disabled = true;
        buttonTwo.disabled = true;
    }if(attempts<6){
        playerTwoScore++;
        playerTwo.innerHTML = playerTwoScore;
        attemptRemening.textContent = `${attemptAll-attempts}`;
    }
};

const setResetButton = () =>{

};

// add event listener

buttonOne.addEventListener("click",buttonValue1);

buttonTwo.addEventListener("click",buttonValue2);

resetButton.addEventListener("click", setResetButton);