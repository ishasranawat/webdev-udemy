let max= prompt("enter the maximum number");

let random= Math.floor(Math.random()* max+1);

let guess= prompt("guess the number");

while(true){
  if(guess=="quit"){
    console.log("the user quit the game.");
    break;
  }

  if (random==guess){
  console.log("you won");
  break;
}
  else{
  guess= prompt("try again")
}
}
