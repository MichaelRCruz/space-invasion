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

function alien() {
if (canvas.getContext) {

var alienOne = new Spaceships(50);
var alienTwo = new Spaceships(200);
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
  // first square
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

  // second square
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
  // third square
  if (alienThree.x == 450) {
    switchDirection[2] = false;
  } else if (alienThree.x == 350) {
    switchDirection[2] = true;
  }
      if (switchDirection[2] == true) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienThree.draw();
        alienThree.x += 10;
      } else if (switchDirection[2] == false) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienThree.draw();
        alienThree.x -= 10;
      }
  // fourth square
  if (alienFour.x == 600) {
    switchDirection[3] = false;
  } else if (alienFour.x == 500) {
    switchDirection[3] = true;
  }
      if (switchDirection[3] == true) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienFour.draw();
        alienFour.x += 10;
      } else if (switchDirection[3] == false) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienFour.draw();
        alienFour.x -= 10;
      }
  // fifth square
  if (alienFive.x == 750) {
    switchDirection[4] = false;
  } else if (alienFive.x == 650) {
    switchDirection[4] = true;
  }
      if (switchDirection[4] == true) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienFive.draw();
        alienFive.x += 10;
      } else if (switchDirection[4] == false) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienFive.draw();
        alienFive.x -= 10;
      }
}, 250);

} else {
  alert('you need a better browser to play this game')
  }
};
alien();
