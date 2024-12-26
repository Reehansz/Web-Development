//var character = document.querySelectorAll(".drum");
// character.forEach(item => {
//     item.addEventListener("click",function (){
//         var w = new Audio('./sounds/tom-1.mp3');
//         w.play();
        
//     })
// }
// )

var elements = document.querySelectorAll(".drum");
for (var i=0; i< elements.length; i++){
    elements[i].addEventListener("click", function (){
        var buttonPressed = this.innerText ; // this refer to the element or the object the event is being taking place
        var url = getAudioUrl(buttonPressed);
        var audio = new Audio(url);
        audio.play();
        addAnimation(buttonPressed);

    })
}
document.addEventListener("keydown", function(event) {
    var keyPressed = event.key.toLowerCase();
    playSound(keyPressed);
    addAnimation(keyPressed);

});

function playSound(key) {
    var audioUrl = getAudioUrl(key);
    if (audioUrl) {
        var audio = new Audio(audioUrl);
        audio.play();
    }
}

function getAudioUrl(key) {
    switch (key) {
        case "w": return "./sounds/tom-1.mp3";
        case "a": return "./sounds/tom-2.mp3";
        case "s": return "./sounds/tom-3.mp3";
        case "d": return "./sounds/tom-4.mp3";
        case "j": return "./sounds/crash.mp3";
        case "k": return "./sounds/kick-bass.mp3";
        case "l": return "./sounds/snare.mp3";
        default: return null;
    }
}

function addAnimation(button){
    document.querySelector("." + button).classList.add("pressed")
    setTimeout(function (){
        document.querySelector("." + button).classList.remove("pressed");
    }, 500);
}