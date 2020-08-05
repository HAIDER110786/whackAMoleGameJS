const holes = document.querySelectorAll('.hole');
const moles = document.querySelectorAll('.mole');
const startButton = document.querySelector('.startButton button');
const reset = document.querySelector('.reset button');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');
let clock;
let endTheGame = false;
let GameTimer;
let points = 0;
let i;

moles.forEach(mole => {
    mole.addEventListener('click',updateTheScore);
});


function updateTheScore(e){
    points++;
    score.textContent = `Score : ${points} ${points===1 ? 'point' : 'points'}`;
    holes[i].classList.remove('show');
}

startButton.addEventListener('click',startTheGame);
reset.addEventListener('click',()=>window.location.reload());

function startTheGame(){
    startButton.disabled = true;
    startTheTimer();
    startShowingThemoles();
    score.textContent = 'Score : 0 points';
}

function startShowingThemoles() {
    i = Math.floor(Math.random() * holes.length);
    holes[i].classList.add('show');
    if(!endTheGame){
        setTimeout(() => {
            holes[i].classList.remove('show');
            startShowingThemoles();
        }, 1000);
    }
    else{
        clearInterval(GameTimer);
        holes[i].classList.remove('show');
        clock=0;
        endTheGame = false;
        points = 0;
        startButton.disabled = false;
        startButton.textContent = 'Play Again';
        alert('game over');
    }
}

function startTheTimer(){
    clock = 15;
    timer.textContent = 'Timer : 00:15';
    GameTimer = setInterval(() => {
        clock--;
        if(clock>=0){
            timer.textContent = `Timer : 00:${clock>=10 ? clock : '0'+clock}`;
        }
        else{
            endTheGame=true;
        }
    }, 1000);
}
