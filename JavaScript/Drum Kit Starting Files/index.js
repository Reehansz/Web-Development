var character = document.querySelectorAll(".drum");
// character.forEach(item => {
//     item.addEventListener("click",function (){
//         var w = new Audio('./sounds/tom-1.mp3');
//         w.play();
        
//     })
// }
// )

document.addEventListener("keydown", function(event) {
    var keyPressed = event.key.toLowerCase();
    playSound(keyPressed);

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