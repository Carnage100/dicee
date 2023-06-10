var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var imageSelect1 = "images/dice"+randomNumber1+".png";
var imageSelect2 = "images/dice"+randomNumber2+".png";
document.querySelector(".img1").setAttribute("src", imageSelect1);
document.querySelector(".img2").setAttribute("src", imageSelect2);
if (randomNumber1 > randomNumber2)
{
    document.querySelector("h1").innerHTML="Player 1 won 🚩";
}
else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML="Tie 🎲";
}
else {
    document.querySelector("h1").innerHTML="Player 2 won 🚩";
}