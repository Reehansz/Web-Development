var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);
var firstImageUrl = getImage(randomNumber1);
var secondImageUrl = getImage(randomNumber2);
console.log(firstImageUrl, secondImageUrl);
document.querySelector(".img1").setAttribute("src", firstImageUrl);
document.querySelector(".img2").setAttribute("src", secondImageUrl);
function getImage(number){
    if (number == 1) return "./images/dice1.png" ;
    else if (number == 2) return "./images/dice2.png" ;
    else if (number == 3) return "./images/dice3.png" ;
    else if (number == 4) return "./images/dice4.png" ;
    else if (number == 5) return "./images/dice5.png" ;
    else return "./images/dice6.png" ;
}
if (randomNumber1 > randomNumber2) {
    document.querySelector(".container > h1").innerHTML = "Player1 wins!!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container > h1").innerHTML = "Player2 wins!!";
}
else {
    document.querySelector(".container > h1").innerHTML = "Draw!!"
}