$value = 300
$location = $('#shooter').offset();

// spaceship constructor function
function Spaceships(x) {
  this.x = x
  this.y = 75
  this.color = 'rgb(192, 192, 192)'
  this.draw = function() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, 50, 50);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  };
};
$(document).ready(function() {
  $(document).keydown(function(e) {
      if (e.keyCode === 37 && $value !== 15) {
        $('#shooter').css('left', '' + $value - 15 + 'px');
        $value -= 15;
        $location = $('#shooter').offset();
      } else if (e.keyCode === 39 && $value < 1230) {
          $('#shooter').css('left', '' + ($value + 15) + 'px');
          $value = $value + 15;
          $location = $('#shooter').offset();
      } else if (e.keyCode === 38) {
          var laserGun = $("<div id='laser'></div>")
          $('body').append(laserGun);
          var laserMove = $('#laser');
          laserMove.css({top: $location.top, left: $location.left + 18})
          laserMove.animate({top: '-8px'}, "fast");
      }
  })
});



var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var raf;
var switchDirection = [true, true, true, true, true];
var shipParams = [
  alienOne, alienTwo, alienThree, alienFour, alienFive, alienSix, alienSeven
];

function alien() {
if (canvas.getContext) {

var alienOne = new Spaceships(50);
// var alienTwo = new Spaceships(200);
var alienThree = new Spaceships(350);
var alienFour = new Spaceships(500);
var alienFive = new Spaceships(650);

alienOne.draw();
alienTwo.draw();
alienThree.draw();
alienFour.draw();
alienFive.draw();

setInterval(function redraw() {
ctx.clearRect(0, 0, canvas.width, canvas.height);
var increment += 150;
for (var j = 0; j < shipParams.length; j++) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (shipParams[j].x == increment) {
      switchDirection[0] = false;
    } else if (shipParams[j].x == (increment - 100)) {
      switchDirection[0] = true;
    }
        if (switchDirection[0] == true) {
          shipParams[j].draw();
          shipParams[j].x += 10;
        } else if (switchDirection[0] == false) {
          shipParams[j].draw();
          shipParams[j].x -= 10;
        }
  };
  }, 250);


} else {
  alert('you need a better browser to play this game')
  }
};
alien();
