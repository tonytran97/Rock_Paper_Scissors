cpuChoice = '';

userChoice = '';
score = parseInt($('#score').text());
console.log(score);

$('#rock').on('click', () => {
    const rock = 'rock';
    userChoice = rock;
    console.log(userChoice);
    cpuGenerate();
    game();
});

$('#paper').on('click', () => {
    const paper = 'paper';
    userChoice = paper;
    console.log(userChoice);
    cpuGenerate();
    game();
});

$('#scissor').on('click', () => {
    const scissors = 'scissors'
    userChoice = scissors;
    console.log(userChoice);
    cpuGenerate();
    game();
});

// function that generates a random number and selects from the array above
function cpuGenerate() {
    // array of choices for the cpu to pick
    cpuArray = ['rock', 'paper', 'scissors'];
    cpuSelect = cpuArray[Math.floor(Math.random() * cpuArray.length)];
    cpuChoice = cpuSelect;
    console.log(cpuChoice);
}

// function that compares the user's choice vs cpu's choice and tracks points
function game() {
    if (userChoice == 'rock' && cpuChoice == 'scissors') {
        console.log('+1');
        win = score + 1;
        $('#score').text(win);
    } else if (userChoice == 'paper' && cpuChoice == 'rock') {
        console.log('+1');
        win = score + 1;
        $('#score').text(win);
    } else if (userChoice == 'scissors' && cpuChoice == 'paper') {
        console.log('+1');
        win = score + 1;
        $('#score').text(win);
    } else if (userChoice === cpuChoice) {
        console.log('0');
        tie = score;
        $('#score').text(tie);
    } else {
        console.log('-1');
        lose = score - 1;
        $('#score').text(lose);
    }
    score = parseInt($('#score').text());
}