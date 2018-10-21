const options = ['papier', 'kamień', 'nożyce'],
    info = ["remis", "wygrałeś", "przegrałeś"],
    choicePlayer = document.querySelector('.choice-player'),
    player = document.querySelector('.choice-game__player'),
    computer = document.querySelector('.choice-game__pc'),
    scoreFight = document.querySelector('.score__fight'),
    scorePlayer = document.querySelector('.score__player'),
    scorePc = document.querySelector('.score__pc'),
    start = document.getElementById('start'),
    rest = document.getElementById('reset');

const objPlayer = {
    points: 0,
    choice: null,
    /* metoda wstawiająca ilosc punktów do elementu wskazanego jako argument */
    showPoints(el) {
        el.textContent = this.points;
    }

}

const objPc = {
    points: 0,
    choice: null,
    showPoints(el) {
        el.textContent = this.points;
    }

}

/* zielony kolor gdy gracz ma wiecej punktów niż pc */
const colorPoints = () => {
    if (objPlayer.points >= objPc.points) {
        scorePlayer.classList.remove('lose');
        scorePlayer.classList.add('win');
    }
    else {
        scorePlayer.classList.remove('win');
        scorePlayer.classList.add('lose');
    }
}

choicePlayer.addEventListener("click", (e) => {
    for (let i = 0; i < choicePlayer.childElementCount; i++) {
        choicePlayer.children[i].classList.remove('active');
    }
    e.target.parentNode.classList.add('active');
    objPlayer.choice = e.target.alt;
    player.textContent = objPlayer.choice
    computer.textContent = "?";
    scoreFight.textContent = 'Teraz START';
});

start.addEventListener("click", () => {
    const option = Math.round(Math.random() * (options.length - 1));
    computer.textContent = '?';
    if (!objPlayer.choice) {
        scoreFight.innerHTML = '<span class="lose">Wybierz coś !!!</span>';
    }

    else if ((player.textContent === options[option])) {
        computer.textContent = options[option];
        scoreFight.innerHTML = '<span class="evenly">' + info[0] + '</span>';
        objPlayer.points++;
        objPc.points++;
        objPlayer.showPoints(scorePlayer);
        objPc.showPoints(scorePc);
        colorPoints();
    }
    else if (((options[option] === "kamień") && (player.textContent === "nożyce")) || ((options[option] === "nożyce") && (player.textContent === "papier")) || ((options[option] === "papier") && (player.textContent === "kamień"))) {
        computer.textContent = options[option];
        scoreFight.innerHTML = '<span class="lose">' + info[2] + '</span>';
        objPc.points++;
        objPc.showPoints(scorePc);
        colorPoints();
    }
    else {
        computer.textContent = options[option];
        scoreFight.innerHTML = '<span class="win">' + info[1] + '</span>';
        objPlayer.points++;
        objPlayer.showPoints(scorePlayer);
        colorPoints();
    }
    /* przeładowanie strony żeby wyzerować grę */
    reset.addEventListener('click', function () {
        location.reload();
    });
});