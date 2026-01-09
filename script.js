let computerScore=0;
let humanScore=0;

function getComputerChoice(){
    let x=Math.floor(Math.random() * 3);
    if(x==0) return "rock";
    else if(x==1) return "paper";
    else return "scissor"
}

function getHumanChoice(){
    let s=window.prompt("Enter your choice").toLowerCase();
    return s
}

function playRound(computerChoice,humanChoice){
    if (humanChoice === computerChoice) {
        console.log("Tie");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissor") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log("You win");
        humanScore++;
    } else {
        console.log("You lose");
        computerScore++;
    }
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}

function playGame(){
    for(let i=0;i<5;i++){
    const computerChoice=getComputerChoice();
    const humanChoice=getHumanChoice();
    playRound(computerChoice,humanChoice);
    }
}

playGame();