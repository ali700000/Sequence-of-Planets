const startBtn = document.getElementById("startBtn");
const restartBtn = document.getElementById("restartBtn");
const status = document.getElementById("status");
const progress = document.getElementById("progress");
const planets = document.querySelectorAll(".planet");

let currentPlanet = 1;
let gameStarted = false;

planets.forEach(button => {

    button.disabled = true;

});

startBtn.addEventListener("click", function(){

    gameStarted = true;

    currentPlanet = 1;

    status.textContent = "Mission Started! Click Mercury first.";

    progress.textContent = "Progress: 0 / 5";

    planets.forEach(button => {

        button.disabled = false;

        button.style.opacity = "1";

    });

});

planets.forEach(button=>{

    button.addEventListener("click", function(){

        if(!gameStarted){

            return;

        }

        const order = Number(button.dataset.order);

        if(order === currentPlanet){

            button.disabled = true;

            button.style.opacity = ".5";

            currentPlanet++;

            progress.textContent =
            "Progress: " + (currentPlanet-1) + " / 5";

            if(currentPlanet===6){

                status.textContent =
                "Mission Complete! You reached your destination!";

                gameStarted = false;

            }
            else{

                status.textContent =
                "Correct! Keep going.";
            }

        }

        else{

            status.textContent =
            "Wrong planet! Restart and try again.";

            gameStarted = false;

        }

    });

});

restartBtn.addEventListener("click", restartGame);

function restartGame(){

    gameStarted = false;

    currentPlanet = 1;

    status.textContent =
    'Click "Start Mission" to begin.';

    progress.textContent =
    "Progress: 0 / 5";

    planets.forEach(button=>{

        button.disabled = true;

        button.style.opacity = "1";

    });

}
