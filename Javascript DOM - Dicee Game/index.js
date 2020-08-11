var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomImg1 = "images/dice" + randomNumber1 + ".png";
var img1 = document.querySelectorAll('img')[0]
img1.setAttribute('src', randomImg1);

var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImg2 = "images/dice" + randomNumber2 + ".png";
var img2 = document.querySelectorAll('img')[1]
img2.setAttribute('src', randomImg2);

if (randomNumber1 == randomNumber2){
  document.querySelector('h1').textContent = "Draw";
}
if (randomNumber1 > randomNumber2){
  document.querySelector('h1').textContent = "Player1 Wins!";
}
else{
  document.querySelector('h1').textContent = "Player2 Wins!";
}
