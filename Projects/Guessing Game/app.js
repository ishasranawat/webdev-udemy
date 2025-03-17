let max= prompt("enter the maximum number");

let random= Math.floor(Math.random()* max+1);

let guess= prompt("guess the number");

while(true){
  if(guess=="quit"){
    console.log("You quit the game.");
    break;
  }
  if (guess==random){
  console.log("Congratulations! You won.");
  break;
} else if (guess < random){
  guess= prompt("Hint: Your guess was too small. Think bigger.");
} else {
  guess= prompt("Hint: Your guess was too big. Think smaller.");
}
guess = prompt("Guess again");
}
