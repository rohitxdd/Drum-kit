// var totalButton = document.querySelectorAll(".drum").length;
// console.log(totalButton);
// for (var i=0;i<totalButton;i++ ){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function(){alert("got clicked "+i)});

// }

// var drumButtons = document.querySelectorAll(".drum");

// for (var drumButton of drumButtons) {

//     drumButton.addEventListener("click", function(){drumButton.innerHTML="x";});

// }

document.querySelectorAll("button").forEach(button => button.addEventListener("click", function(){
    var buttonInnerHTML = this.innerHTML;
    playSound(buttonInnerHTML);
    btnAnimator(buttonInnerHTML);
}));

document.addEventListener("keydown", function(event){
    playSound(event.key);
    btnAnimator(event.key);
})

function playSound(x){
    switch (x) {
        case "w":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            break;
        case "s":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            console.log(x);
    }
}


function btnAnimator(keyPress){
    document.querySelector("."+keyPress).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("."+keyPress).classList.remove("pressed")
    },100);
}