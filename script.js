
let character = document.getElementById("character");
let obstacle = document.getElementById("obstacle");

//Create an event listener. When the user presses the up arrow, the function   jump() is invoked and the character jumps.
document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowUp') {
        jump()
    }
})

//The function jump() makes the character jump. It utilizes the class .animate that I created in CSS.
function jump() {
    if(character.classList == "animate"){
        return;
    }
    character.classList.add("animate");
    setTimeout(removeJump,300);
};
function removeJump() {
    character.classList.remove('animate')
}

//Checks if the character touches the obstacle and if so, alerts "Game Over" and starts the game again.
let gameOver = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    if(obstacleLeft < 20 && obstacleLeft >- 20 && characterTop >= 130) {
        obstacle.style.animation = "none";
        alert("Game Over");
        counter = 0;
        obstacle.style.animation = "block 1.5s infinite linear";
    } else {
        counter ++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter/100);
    }
}, 10);