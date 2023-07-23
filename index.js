// detecting button press

var numofdrum = document.querySelectorAll('.drum').length;

for (var i = 0; i < numofdrum; i++) {
  document.querySelectorAll('.drum')[i].addEventListener('click', function () {
    var abc = this.innerHTML;
    makeSound(abc);
    buttonAnimation(abc);
  });
}

// detecting key press

document.addEventListener('keypress', function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      //this.style.color = 'white';
      var abs = new Audio('sounds/tom-1.mp3');
      abs.play();
      break;
    case 'a':
      // this.style.color = 'white';
      var abs = new Audio('sounds/tom-2.mp3');
      abs.play();
      break;
    case 's':
      // this.style.color = 'white';
      var abs = new Audio('sounds/tom-3.mp3');
      abs.play();
      break;
    case 'd':
      // this.style.color = 'white';
      var abs = new Audio('sounds/tom-4.mp3');
      abs.play();
      break;
    case 'j':
      //this.style.color = 'white';
      var abs = new Audio('sounds/crash.mp3');
      abs.play();
      break;
    case 'k':
      // this.style.color = 'white';
      var abs = new Audio('sounds/kick-bass.mp3');
      abs.play();
      break;
    case 'l':
      // this.style.color = 'white';
      var abs = new Audio('sounds/snare.mp3');
      abs.play();
      break;
    default:
      console.log(abc);
  }
}

function buttonAnimation(btnkey) {
  var activebtn = document.querySelector('.' + btnkey);
  activebtn.classList.add('pressed');

  setTimeout(function () {
    activebtn.classList.remove('pressed');
  }, 100);
}
