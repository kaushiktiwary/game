function diceRollout(){
// alert("hi");
var randomNumber1=Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
document.querySelectorAll("img")[0].setAttribute("src",randomImageSource);
// for secound dice
var randomNumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomDiceImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

// declaration of result
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerText="Player 1 wins🤠";
    var player1Sound=new Audio("sounds/player1.mp3");
    player1Sound.play();
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerText="Player 2 wins😎";
    var player1Sound=new Audio("sounds/player2.mp3");
    player1Sound.play();
}else{
    document.querySelector("h1").innerText="draw😷";
}


setTimeout(function(){
    document.querySelector("h1").innerText="Roll iT"
}, 2000);

}


document.querySelector(".btn").addEventListener("click",btnAction);
function btnAction(){
    diceRollout();
   
}

