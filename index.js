// Globally assigning these variables for accessibility;
let compChoice;
let humanChoice;
let result;

// Create a functtion for compChoice
function getCompChoice(){
    let randNum = Math.floor(Math.random() * 3);
    if(randNum == 1){
        compChoice = "rock"
    }else if(randNum == 2){
        compChoice = "paper"
    }else{
        compChoice = "scissors"
    }
    return compChoice;
}
// function for human choice
function getHumanChoice(){
    let count = 0;
    while(count === 0){
    let checkChoice = prompt("Please enter \"Rock\", \"Paper\" or \"Scissors\" ");
    if(checkChoice.toLowerCase() === "rock" ||checkChoice.toLowerCase() === "paper"||checkChoice.toLowerCase() === "scissors" ){
        humanChoice = checkChoice;
        count++;
        return humanChoice;
    }
    else{
        alert("Not a valid choice ");
    }
}}
function compareChoice(comp,human){
    // Check if human wins if not comp wins
    if(comp === "rock" && human === "paper" || comp === "paper" && human === "scissors" || comp === "scissors" && human === "rock"){
       return  result = "human";

    }
    else if(comp === human){
        return result = "draw";
    }
    else{
       return result = "comp";
    }

}
// Play game function
function playGame(){
    let scoreHuman = 0;
    let scoreComp = 0;
    for(let i = 0; i <5; i++){

    getCompChoice();
    getHumanChoice();
    compareChoice(compChoice, humanChoice);
    if(result === "human"){
        scoreHuman++;
        console.log(`Congrats Human wins with ${humanChoice}`);
    }else if(result === "comp"){
        scoreComp++
        console.log(`Hard luck Computer wins with ${compChoice}`);
    }else{
        console.log("Its a draw")
    }
    console.log(`Current Score : Human: ${scoreHuman} - ${scoreComp} :Computer`);
    }
    if(scoreHuman>scoreComp){
        console.log("Congrats Human wins");
    }
    else if (scoreHuman == scoreComp){
       console.log("Its a draw");
    }
    else{
        console.log("Computer wins");
    }
}
playGame();