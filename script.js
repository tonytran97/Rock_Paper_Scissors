cpuChoice = '';
userChoice = '';
score = parseInt($('#score').text());

$('#rock').on('click', () => {
    $('#user').text('');
    rockDisplay = $(`<button id="rock" class="btn btn-secondary btn-lg">
    <i class="fa-solid fa-hand-fist fa-rotate-90"></i>
  </button><p>user</p>`);
    $('#user').append(rockDisplay);
    const rock = 'rock';
    userChoice = rock;
    console.log(userChoice);
    cpuGenerate();
    game();
});

$('#paper').on('click', () => {
    $('#user').text('');
    paperDisplay = $(`<button id="paper" class="btn btn-secondary btn-lg">
    <i class="fa-solid fa-hand fa-rotate-90"></i>
  </button></button><p>user</p>`);
    $('#user').append(paperDisplay);
    const paper = 'paper';
    userChoice = paper;
    console.log(userChoice);
    cpuGenerate();
    game();
});

$('#scissor').on('click', () => {
    $('#user').text('');
    scissorsDisplay = $(`<button id="scissor" class="btn btn-secondary btn-lg">
    <i class="fa-solid fa-hand-scissors fa-flip-horizontal"></i>
  </button></button><p>user</p>`);
    $('#user').append(scissorsDisplay);
    const scissors = 'scissors'
    userChoice = scissors;
    console.log(userChoice);
    cpuGenerate();
    game();
});

// function that generates a random number and selects from the array above
function cpuGenerate() {
    $('#cpu').text('');
    // array of choices for the cpu to pick
    cpuArray = ['rock', 'paper', 'scissors'];
    cpuSelect = cpuArray[Math.floor(Math.random() * cpuArray.length)];
    cpuChoice = cpuSelect;
    console.log(cpuChoice);
    if (cpuChoice === 'rock') {
        cpuGame = $(`<button id="rock" class="btn btn-secondary btn-lg">
        <span class="fa-flip-horizontal" style="display: inline-block;">
      <i class="fa-solid fa-hand-fist fa-rotate-90"></i>
    </span>
      </button></button><p>cpu</p>`)}
      else if (cpuChoice === "paper") {
        cpuGame = $(`<button id="paper" class="btn btn-secondary btn-lg">
        <span class="fa-flip-horizontal" style="display: inline-block;">
      <i class="fa-solid fa-hand fa-rotate-90"></i>
      </button></button><p>cpu</p>`)}
      else {
       cpuGame = $(`<button id="scissor" class="btn btn-secondary btn-lg">
    <i class="fa-solid fa-hand-scissors"></i>
  </button></button><p>cpu</p>`)};
  $('#cpu').append(cpuGame);
  $('#vs').text('vs');
    } 


// function that compares the user's choice vs cpu's choice and tracks points
function game() {
    if (userChoice == 'rock' && cpuChoice == 'scissors') {
        console.log('+1');
        win = score + 1;
        $('#score').text(win);
        $('#result').text('Win');
    } else if (userChoice == 'paper' && cpuChoice == 'rock') {
        console.log('+1');
        win = score + 1;
        $('#score').text(win);
        $('#result').text('Win');
    } else if (userChoice == 'scissors' && cpuChoice == 'paper') {
        console.log('+1');
        win = score + 1;
        $('#score').text(win);
        $('#result').text('Win');
    } else if (userChoice === cpuChoice) {
        console.log('0');
        tie = score;
        $('#result').text('Tied');
        $('#score').text(tie);
    } else {
        console.log('-1');
        lose = score - 1;
        $('#score').text(lose);
        $('#result').text('Lost');
    }
    score = parseInt($('#score').text());
}