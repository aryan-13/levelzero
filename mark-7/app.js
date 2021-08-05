var inputText = document.querySelector('#txt-input');
var fURL = 0;

var sURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';
var sURL2 = 'https://api.funtranslations.com/translate/valyrian.json';
var sURL3 = 'https://api.funtranslations.com/translate/sith.json';

var button = document.querySelector('#btn-1').addEventListener('click', () => {
  fURL = sURL;
  pressed();
});

var button = document.querySelector('#btn-3').addEventListener('click', () => {
  fURL = sURL2;
  pressed();
});
var button = document.querySelector('#btn-4').addEventListener('click', () => {
  fURL = sURL3;
  pressed();
});

var output = document.querySelector('#output');

function errorHandler(err) {
  console.log(err, 'There was an error!');
}

function pressed() {
  // console.log('btn clicked', inputText.value);
  var url = fURL + '?text=' + inputText.value;
  console.log(url);
  fetch(url)
    .then((res) => res.json())
    .then((res) => {
      output.innerHTML = res.contents.translated;
    })
    .catch(errorHandler);
}
