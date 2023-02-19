
//Global variables
let character = document.createElement('img');
character.src = "assets/temple-run.gif";
character.setAttribute("id", "character");
document.getElementById("game").append(character);

let obstacle = document.createElement("img");
obstacle.src = "assets/temple-barrel.png";
obstacle.setAttribute("id", "obstacle");
document.getElementById("game").append(obstacle)

//Create an event listener. When the user presses the up arrow, the function   jump() is invoked and the character jumps.
document.addEventListener('keydown', function(e){
    if(e.key === 'ArrowUp') {
        jump()
    }
})

function start() {
    startGame();
}

//The function jump() makes the character jump. It utilizes the class .animate that I created in CSS.
function jump() {
    character.src = "assets/temple-jump.gif";
    if(character.classList == "animate"){
        return;
    }
    character.classList.add("animate");
    setTimeout(removeJump,800);
};
function removeJump() {
    character.classList.remove('animate')
    character.src = "assets/temple-run.gif";
}

//Checks if the character touches the obstacle and if so, alerts "Game Over" and starts the game again.
let gameOver = setInterval(function() {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    let obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue('left'));
    if(obstacleLeft < 30 && obstacleLeft >- 30 && characterTop >= 360) {
        obstacle.style.animation = "none";
        stop()
        obstacle.style.animation = "block 1.5s infinite linear";
    }
    homePage()
}, 10);

function startGame() {
    this.toggleScreen('start-screen', false);
    this.toggleScreen('game',true)
    toggleScreen('game-over-screen', false)
    this.toggleScreen('temple-idle', true)
    this.toggleScreen('temple-idle', false)
}

function toggleScreen(id, toggle){
    let gameScreen = document.getElementById(id);
    let display = ( toggle ) ? 'block' : 'none';
    gameScreen.style.display = display;
}

function stop() {
    this.toggleScreen('start-screen', false);
    this.toggleScreen('game',false);
    this.toggleScreen('game-over-screen', true);
    setTimeout.clearInterval();
}