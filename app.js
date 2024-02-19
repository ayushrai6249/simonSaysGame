let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener('keypress', function () {
    if (started == false) {
        started = true;
        levelUp();
        document.querySelector('body').style.background = "url('Images/pcBcg.jpg')"
        document.querySelector('body').style.backgroundRepeat = "no-repeat"
        document.querySelector('body').style.backgroundSize = "cover"
    }
})
function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}
function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    btnFlash(randBtn);
}
function checkAns(idx) {

    if (gameSeq[idx] === userSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    }
    else {
        h2.innerHTML = `GAME OVER! <br> <b>Your score was ${level}</b> <br> Press key to Restart `;
        document.querySelector('body').style.background = "url('Images/lose.jpg')"
        document.querySelector('body').style.backgroundRepeat = "no-repeat"
        document.querySelector('body').style.backgroundSize = "cover"
        reset();
    }
}
function userBtnFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 100);
}
function btnPress() {
    let btn = this;
    userBtnFlash(btn);

    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
    phnBtn.style.display= "";

}

let phnBtn = document.getElementById('startBtn');
phnBtn.addEventListener('click', function () {
    if (started == false) {
        started = true;
        levelUp();
        document.querySelector('body').style.background = "url('Images/pcBcg.jpg')"
        document.querySelector('body').style.backgroundRepeat = "no-repeat"
        document.querySelector('body').style.backgroundSize = "cover"
        phnBtn.style.display= "none";
    }
})