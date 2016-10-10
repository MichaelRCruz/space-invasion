$value = 300
$location = $('#shooter').offset();

// spaceship constructor function
function Spaceships(x, y, color, width, height) {
  this.x = x
  this.y = y
  this.color = color
  this.width = width
  this.height = height
  var image = new Image()
  image.src = "https://ryanmurphyblog.files.wordpress.com/2015/04/space-invader.png"
  this.draw = function() {
    ctx.beginPath();
    ctx.drawImage(image, this.x, this.y, this.width, this.height);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  };
};

function drawFighter() {
  ctx.beginPath();
  var image = new Image()
  image.src = "https://upload.wikimedia.org/wikipedia/commons/f/f3/Space_Invaders_Second_Row.PNG"
  ctx.drawImage(image, 600, 550, 50, 30);
  ctx.closePath();
  ctx.fill();
}

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
      if ($location.left < 700) {
        console.log('hi');
      } else {
        console.log('dude');
      };
  })
});



var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var raf;
var switchDirection = [
  true, true, true, true, true, true, true,
  true, true, true, true, true, true, true
];

function alien() {
if (canvas.getContext) {

var alienOne = new Spaceships(50, 75, 'rgb(192, 192, 192)', 50, 50);
var alienTwo = new Spaceships(200, 75, 'rgb(192, 192, 192)', 50, 50);
var alienThree = new Spaceships(350, 75, 'rgb(192, 192, 192)', 50, 50);
var alienFour = new Spaceships(500, 75, 'rgb(192, 192, 192)', 50, 50);
var alienFive = new Spaceships(650, 75, 'rgb(192, 192, 192)', 50, 50);
var alienSix = new Spaceships(800, 75, 'rgb(192, 192, 192)', 50, 50);
var alienSeven = new Spaceships(950, 75, 'rgb(192, 192, 192)', 50, 50);

var alien1 = new Spaceships(100, 175, 'rgb(225, 228, 181)', 50, 50);
// var alien2 = new Spaceships(200, 75, 'rgb(192, 192, 192)', 50, 50);
// var alien3 = new Spaceships(350, 75, 'rgb(192, 192, 192)', 50, 50);
// var alien4 = new Spaceships(500, 75, 'rgb(192, 192, 192)', 50, 50);
// var alien5 = new Spaceships(650, 75, 'rgb(192, 192, 192)', 50, 50);
// var alien6 = new Spaceships(800, 75, 'rgb(192, 192, 192)', 50, 50);
// var alien7 = new Spaceships(950, 75, 'rgb(192, 192, 192)', 50, 50);

var fighter = new Spaceships(600, 550, 'red', 50, 30);

alienOne.draw();
alienTwo.draw();
alienThree.draw();
alienFour.draw();
alienFive.draw();
alienSix.draw();
alienSeven.draw();

alien1.draw();
// alien2.draw();
// alien3.draw();
// alien4.draw();
// alien5.draw();
// alien6.draw();
// alien7.draw();

// fighter.draw();
drawFighter();

setInterval(function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawFighter();


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

  // Sixth square
  if (alienSix.x == 900) {
    switchDirection[5] = false;
  } else if (alienSix.x == 800) {
    switchDirection[5] = true;
  }
      if (switchDirection[5] == true) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienSix.draw();
        alienSix.x += 10;
      } else if (switchDirection[5] == false) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienSix.draw();
        alienSix.x -= 10;
      }

  // Seventh square
  if (alienSeven.x == 1050) {
    switchDirection[6] = false;
  } else if (alienSeven.x == 950) {
    switchDirection[6] = true;
  }
      if (switchDirection[6] == true) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienSeven.draw();
        alienSeven.x += 10;
      } else if (switchDirection[6] == false) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienSeven.draw();
        alienSeven.x -= 10;
      }

  // 1st square
  if (alien1.x >= 200) {
    switchDirection[7] = false;
  } else if (alien1.x <= 100) {
    switchDirection[7] = true;
  }
      if (switchDirection[7] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien1.draw();
        alien1.x += 13;
      } else if (switchDirection[7] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien1.draw();
        alien1.x -= 13;
      }

}, 250);

// setInterval(function redraw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     fighter.draw();
//
//   // 1st square
//   if (alien1.x == 200) {
//     switchDirection[7] = false;
//   } else if (alien1.x == 100) {
//     switchDirection[7] = true;
//   }
//       if (switchDirection[7] == true) {
//         // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
//         alien1.draw();
//         alien1.x += 10;
//       } else if (switchDirection[7] == false) {
//         // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
//         alien1.draw();
//         alien1.x -= 10;
//       }
// }, 250);



if ($location.left < 700) {
  console.log('hi');
} else {
  console.log('dude');
};


} else {
  alert('you need a better browser to play this game')
  }
};
alien();
