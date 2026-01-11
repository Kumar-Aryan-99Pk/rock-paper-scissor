let computerScore=0;
let humanScore=0;
const maxRound=5;
let rounds=0;
let buttons=document.querySelectorAll("button");
function getComputerChoice(){
    let x=Math.floor(Math.random() * 3);
    if(x==0) return "rock";
    else if(x==1) return "paper";
    else return "scissor"
}

function getHumanChoice() {
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            let humanChoice = button.textContent.toLowerCase();
            let computerChoice = getComputerChoice();
            playRound(computerChoice, humanChoice);
        });
    });
}
function playRound(computerChoice,humanChoice){
    if(rounds>=maxRound){
        humanScore=0;
        computerScore=0;
        rounds=0;
    }
    let compchoice=document.querySelector(".computer-choice");
    let result=document.querySelector(".result")
    compchoice.textContent=`Computer chose ${computerChoice}`
    if (humanChoice === computerChoice) {
        console.log("Tie");
        result.textContent="Tie";
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        result.textContent="You win";
        console.log("You win");
        humanScore++;
    } else {
        result.textContent="You lose";
        console.log("You lose");
        computerScore++;
    }
    let pscore=document.querySelector(".player-score");
    pscore.textContent=`Player score: ${humanScore}`;
    let cscore=document.querySelector(".computer-score");
    cscore.textContent=`Computer score: ${computerScore}`;
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
    rounds++;
    if(rounds>=maxRound){
        declareWinner();
    }

}
function declareWinner() {
    let finalResult = document.querySelector(".result");
    if (humanScore > computerScore) {
        finalResult.textContent = "You are the overall winner!";
    } else if (computerScore > humanScore) {
        finalResult.textContent = "Computer wins the game!";
    } else {
        finalResult.textContent = "It's a tie overall!";
    }

}

function playGame(){
    getHumanChoice();
}



playGame();