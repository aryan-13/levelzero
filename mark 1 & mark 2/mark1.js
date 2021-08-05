var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
console.log(chalk.yellow('----------------------------------'));
console.log(chalk.cyan.bold(' 😎 HOW WELL DO YOU KNOW ' + 'ARYAN? 😎'));
console.log(chalk.yellow('----------------------------------'));
var userName = readlineSync.question('Please enter your name! \n');

console.log('Hi ' + userName + '😎 \n');
var scoreB = [
  {
    name: 'Nalin',
    score: 1,
  },
  {
    name: 'Arushi',
    score: 2,
  },
  {
    name: 'Timsy',
    score: 4,
  },
];

console.log('Lets start with some basic questions first! ');

var questions = [
  {
    q: 'Where do I live? ',
    a: 'Noida',
  },
  {
    q: 'Do i have a dog or a cat? ',
    a: 'dog',
  },
  {
    q: "What's the name of my dog? ",
    a: 'Tyson',
  },
  {
    q: 'What is my age? ',
    a: '19',
  },
  {
    q: 'Which phone do i have ',
    a: 'iphone 11',
  },
];

function compare_score(a, b) {
  if (a.score < b.score) {
    return -1;
  } else if (a.score > b.score) {
    return 1;
  } else {
    return 0;
  }
}

function init(el) {
  var curr = el;
  var userA = readlineSync.question('Q: ' + curr.q);
  if (userA.toUpperCase() == curr.a.toUpperCase()) {
    score++;
    console.log(chalk.green('Correct answer! ✅'));
  } else {
    console.log(chalk.red('Wrong answer! ❌'));
  }
}
for (var i = 0; i < questions.length; i++) {
  init(questions[i]);
}

scoreB.push({ name: userName, score: score });
console.log('Your final score is: ' + score);
if (score > 2) {
  console.log('🎉🤩🎉🤩🎉🤩🎉 \n');
} else {
  console.log('😑😑😑😑😑😑😑 \n');
}
console.log(chalk.magentaBright('------LEADERBOARD------'));

scoreB.sort(compare_score);
for (var i = 0; i < scoreB.length; i++) {
  console.log(scoreB[i].name + ': ' + scoreB[i].score);
}
