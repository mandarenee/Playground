var animals = [
  'rabbit',
  'frog',
  'dog',
  'giraffe',
  'bear',
  'zebra',
  'horse',
  'squirrel',
  'bird',
  'alligator',
  'crocodile'
];

var currentAnimal = 0;

var numbers = [1, 3, 5, 7, 9, 10];
var sum = 0;
var currentNumber = 0;

window.onload = function() {
  do {
    document.getElementById('message').append(animals[currentAnimal]);
    document.getElementById('message').append("\n");
    currentAnimal += 1;
  } while (currentAnimal < animals.length);

  document.getElementById('message').append('ALL DONE!!');

  do {
    sum += numbers[currentNumber];
    document.getElementById('message').append(
      sum
    );
    document.getElementById('message').append("\n");
    currentNumber += 1;
  } while (currentNumber < numbers.length);

  document.getElementById('message').append('ALL DONE!!');
};
