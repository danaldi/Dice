let randomNumber= Math.floor(Math.random()*6)+1
let randomNumber2= Math.floor(Math.random()*6)+1

document.getElementsByClassName("img1")[0].setAttribute("src",`images\\dice${randomNumber}.png`)
document.getElementsByClassName("img2")[0].setAttribute("src",`images\\dice${randomNumber2}.png`)

if (randomNumber>randomNumber2){
    document.getElementsByClassName("header")[0].innerHTML="Player 1 Win"
} else if (randomNumber===randomNumber2){
    document.getElementsByClassName("header")[0].innerHTML="Draw"
} else{
    document.getElementsByClassName("header")[0].innerHTML="Player 2 win"
}