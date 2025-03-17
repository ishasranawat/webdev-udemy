let max= prompt("enter the maximum number");

let random= Math.floor(Math.random()* max+1);

let guess= prompt("Guess the number");

while(true){
  if(guess=="quit"){
    console.log("You quit the game.");
    break;
  }

  if (random==guess){
  console.log("Congrats! You won");
  break;
}
  else{
  guess= prompt("Your guess was incorrect, try again.")
}
}
