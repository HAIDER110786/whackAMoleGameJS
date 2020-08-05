const holes = document.querySelectorAll('.hole');
const startButton = document.querySelector('.startButton button');
const timer = document.querySelector('.timer');
const score = document.querySelector('.score');
let clock;
let endTheGame = false;
let GameTimer;
let points = 0;
let i;

holes.forEach(hole => {
    hole.addEventListener('click',updateTheScore);
})

function updateTheScore(e){
    if(e.isTrusted){
        points++;
        score.textContent = `Score : ${points} ${points===1 ? 'point' : 'points'}`;
        holes[i].classList.remove('show');
    }
}

startButton.addEventListener('click',startTheGame);

function startTheGame(){
    startTheTimer();
    startShowingThemoles();
}

function startShowingThemoles() {
    i = Math.floor(Math.random() * holes.length);
    holes[i].classList.add('show');
    if(!endTheGame){
        setTimeout(() => {
            holes[i].classList.remove('show');
            startShowingThemoles();
        }, 600);
    }
    else{
        clearInterval(GameTimer);
        holes[i].classList.remove('show');
    }
}

function startTheTimer(){
    clock = 15;
    timer.textContent = '00:15';
    GameTimer = setInterval(() => {
        clock--;
        if(clock>=0){
            timer.textContent = `00:${clock>=10 ? clock : '0'+clock}`;
        }
        else{
            endTheGame=true;
        }
    }, 1000);
}
