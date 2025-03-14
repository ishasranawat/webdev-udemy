//1.Create a new input and button element on the page using JavaScript only. Set the text of button to “Clickme”;
let button= document.createElement('button');
let input= document.createElement('input');
document.querySelector('body').appendChild(button);
document.querySelector('body').appendChild(input);
button.innerHTML="Click Me";



document.querySelector('input').setAttribute('placeholder','username');
document.querySelector('button').id="btn";


document.getElementById('btn').style.backgroundColor="blue";
document.getElementById('btn').style.color="white";


let lasth1= document.createElement('h1');
document.querySelector('body').appendChild(lasth1);
lasth1.innerText= " DOM Practice";
lasth1.style.color="purple";
lasth1.style.textDecoration="underline";



let paraa=document.createElement('p');
document.querySelector('body').appendChild(paraa);
paraa.innerHTML="My Dom <em> Practice. </em>";
