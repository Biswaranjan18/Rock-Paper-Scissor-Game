let userScore = 0;
let compScore = 0;
const choices = document.querySelectorAll(".butm");
const userScoreValue = document.querySelector("#user-score");
const compScoreValue = document.querySelector("#comp-score");

const msg = document.querySelector(".move");

const genComChoice =() =>{
    const option = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
}

const drawGame = () => {
    //console.log("Game was draw.");
    msg.innerText = " Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31";
}

const showWiner =(userWin,userChoice,compChoice) => {
    if(userWin){
            userScore++;
            userScoreValue.innerText = userScore;
            //console.log("You win");
            msg.innerText = `You win! your ${userChoice} beats ${compChoice}`
            msg.style.backgroundColor = "green";
    }else {
            compScore++;
            compScoreValue.innerText = compScore;
            //console.log("You lose");
            msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`
            msg.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choise =",userChoice);
    //Generate computer choise
    const compChoice = genComChoice();
    console.log("computer choise =",compChoice);

    if(userChoice===compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice==="rock"){
            //paper,scissors
            userWin = compChoice === "paper" ? false : true; 
        }else if(userChoice==="paper"){
            //rock , scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock , paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWiner(userWin,userChoice,compChoice);
    }
}

choices.forEach((butm)=>{ 
    butm.addEventListener("click",()=>{
        const userChoice =butm.getAttribute("id");
        playGame(userChoice);
    })
})