$value = 300
$location = $('#shooter').offset();
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
var switchDirection = [true, true];

function alien() {
if (canvas.getContext) {

// constructor function
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
var alienOne = new Spaceships(50);
var alienTwo = new Spaceships(200);

alienOne.draw();
alienTwo.draw();

setInterval(function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // left square
  if (alienOne.x == 150) {
    switchDirection[0] = false;
  } else if (alienOne.x == 50) {
    switchDirection[0] = true;
  }
      if (switchDirection[0] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienOne.draw();
        alienOne.x += 10;
      } else if (switchDirection[0] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienOne.draw();
        alienOne.x -= 10;
      }

  // right square
  if (alienTwo.x == 300) {
    switchDirection[1] = false;
  } else if (alienTwo.x == 200) {
    switchDirection[1] = true;
  }
      if (switchDirection[1] == true) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienTwo.draw();
        alienTwo.x += 10;
      } else if (switchDirection[1] == false) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienTwo.draw();
        alienTwo.x -= 10;
      }
}, 250);

} else {
  alert('you need a better browser to play this game')
  }
};
alien();
