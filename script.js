function getComputerChoice() {
    let guess = Math.floor(Math.random() * 3);
        if (guess == 0){
            return "Rock";
        } else if (guess == 1){
            return "Paper";
        } else{
            return "Scissors"
        }
}
//console.log(getComputerChoice())

let lose = "Computer Wins"
let win = "Player Wins!"
let draw = "It's a Draw!"
let computerWins = 0;
let playerWins = 0;
let decision = "null"
function gamePlay(){
    if (getComputerChoice() == "Rock" && choice == "Scissors"){
        decision = "lose"
        return lose
    }else if(getComputerChoice() == "Scissors" && choice == "Paper"){
        decision = "lose"
        return lose
    }else if(getComputerChoice() == "Paper" && choice == "Rock"){
        decision = "lose"
        return lose
    }else if(getComputerChoice() == "Rock" && choice == "Scissors"){
        decision = "win"
        return win
    }else if(getComputerChoice() == "Scissors" && choice == "Paper"){
        decision = "win"
        return win
    }else if(getComputerChoice() == "Paper" && choice == "Rock"){
        decision = "win"
        return win
    }else{
        return draw
    }
}
//console.log(gamePlay)

 for(let i = 0; i <= 5; i++) {
    if (decision == "win"){
        playerWins++
    }else if (decision =="loss"){
        computerWins++
    }

    if (i >= 5 && playerWins > computerWins){
        console.log("Player has won the game!")
    }else if(i >= 5 && computerWins > playerWins){
        console.log("Computer has won the game!")
    }else if(i >= 5 && computerWins == playerWins){
        console.log("No one won!")
    }else{
        console.log("Next Round Starting...")
    }

    choice = String(prompt("Enter Rock, Paper, or Scissors"))
    console.log(getComputerChoice())
    console.log(gamePlay())
    }