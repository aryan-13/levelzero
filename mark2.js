var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;
console.log(chalk.yellow('----------------------------------'));
console.log(chalk.cyan.bold(' 😎 The Ultimate Naruto Quiz 😎'));
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

console.log('NOTE: You just have to type either A or B! \n');

console.log('Lets Begin!!! ');

var questions = [
  {
    q: "Who is kakashi's eternal rival? ",
    option1: 'A: Guy',
    option2: 'B: Minato',
    a: 'A',
  },
  {
    q: "Who is Naruto's god father? ",
    option1: 'A: Jiraya',
    option2: 'B: Tsunade',
    a: 'A',
  },
  {
    q: 'Who is the son of naruto? ',
    option1: 'A: Boruto',
    option2: 'B: Kawaki',
    a: 'A',
  },
  {
    q: "Who was Sasuke's brother ",
    option1: 'A: Madara',
    option2: 'B: Itachi',
    a: 'B',
  },
  {
    q: 'Who died first? ',
    option1: 'A: Itachi',
    option2: 'B: Jiraya',
    a: 'B',
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
  var userA = readlineSync.question(
    'Q: ' + curr.q + '\n' + curr.option1 + '\n' + curr.option2 + '\n'
  );
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
