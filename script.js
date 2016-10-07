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
var switchDirection = [true, true, true, true, true, true, true];
// var shipParams = [
//   alienOne, alienTwo, alienThree, alienFour, alienFive, alienSix, alienSeven
// ]

function alien() {
if (canvas.getContext) {

var alienOne = new Spaceships(50);
var alienTwo = new Spaceships(200);
var alienThree = new Spaceships(350);
var alienFour = new Spaceships(500);
var alienFive = new Spaceships(650);
var alienSix = new Spaceships(800);
var alienSeven = new Spaceships(950);

alienOne.draw();
alienTwo.draw();
alienThree.draw();
alienFour.draw();
alienFive.draw();
alienSix.draw();
alienSeven.draw();

setInterval(function redraw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // first square
  if (alienOne.x == 150) {
    switchDirection[0] = false;
  } else if (alienOne.x == 50) {
    switchDirection[0] = true;
  }
      if (switchDirection[0] == true) {
        alienOne.draw();
        alienOne.x += 10;
      } else if (switchDirection[0] == false) {
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
        alienTwo.draw();
        alienTwo.x += 10;
      } else if (switchDirection[1] == false) {
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
        alienThree.draw();
        alienThree.x += 10;
      } else if (switchDirection[2] == false) {
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
        alienFour.draw();
        alienFour.x += 10;
      } else if (switchDirection[3] == false) {
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
        alienFive.draw();
        alienFive.x += 10;
      } else if (switchDirection[4] == false) {
        alienFive.draw();
        alienFive.x -= 10;
      }

  // sixth square
  if (alienSix.x == 900) {
    switchDirection[5] = false;
  } else if (alienSix.x == 800) {
    switchDirection[5] = true;
  }
      if (switchDirection[5] == true) {
        alienSix.draw();
        alienSix.x += 10;
      } else if (switchDirection[5] == false) {
        alienSix.draw();
        alienSix.x -= 10;
      }

  // sixth square
  if (alienSeven.x == 1050) {
    switchDirection[5] = false;
  } else if (alienSeven.x == 950) {
    switchDirection[5] = true;
  }
      if (switchDirection[5] == true) {
        alienSeven.draw();
        alienSeven.x += 10;
      } else if (switchDirection[5] == false) {
        alienSeven.draw();
        alienSeven.x -= 10;
      }

}, 250);

} else {
  alert('you need a better browser to play this game')
  }
};
alien();
