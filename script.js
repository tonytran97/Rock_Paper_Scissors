$('#rock').on('click', function (ev) {
    ev.preventDefault();
    console.log(`user selection: rock`);
    cpuGenerate();
});

$('#paper').on('click', function (ev) {
    ev.preventDefault();
    console.log(`user selection: paper`);
    cpuGenerate();
});

$('#scissor').on('click', function (ev) {
    ev.preventDefault();
    console.log(`user selection: scissors`);
    cpuGenerate();
});

// array of choices for the cpu to pick
cpuChoice = ['rock', 'paper', 'scissors'];

// function that generates a random number and selects from the array above
function cpuGenerate() {
    cpuSelect = cpuChoice[Math.floor(Math.random() * cpuChoice.length)];
    console.log(`cpu selection: ${cpuSelect}`);
}