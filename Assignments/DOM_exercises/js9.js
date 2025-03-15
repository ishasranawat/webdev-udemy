//1.Create a new input and button element on the page using JavaScript only. Set the text of button to “Clickme”;
let button= document.createElement('button');
let input= document.createElement('input');
document.querySelector('body').appendChild(button);
document.querySelector('body').appendChild(input);
button.innerHTML="Click Me";


//Qs2. Add following attributes to the element:- Change placeholder value of input to “username” -Change the id of button to “btn”.
document.querySelector('input').setAttribute('placeholder','username');
document.querySelector('button').id="btn";


//Qs3.Access the btn using the query Selector and button id. Change the button background color to blue and textcolor to white.
document.getElementById('btn').style.backgroundColor="blue";
document.getElementById('btn').style.color="white";


//Qs4.Create an h1 element on the page and set its text to “DOM Practice” underlined. Change its color to purple.
let lasth1= document.createElement('h1');
document.querySelector('body').appendChild(lasth1);
lasth1.innerText= " DOM Practice";
lasth1.style.color="purple";
lasth1.style.textDecoration="underline";


// Qs5.Create a p tag on the page and set its text to “My dom practice where practice is emphasised.
let paraa=document.createElement('p');
document.querySelector('body').appendChild(paraa);
paraa.innerHTML="My Dom <em> Practice. </em>";
