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

var leftpressed = false;
var rightpressed = false;
$(document).ready(function() {
  $(document).keydown(function(e) {
      if (e.keyCode === 37) {
        leftpressed = true;
      } else if (e.keyCode === 39) {
          rightpressed = true;
      }
  })
  $(document).keyup(function(e) {
      if (e.keyCode === 37) {
        leftpressed = false;
      } else if (e.keyCode === 39) {
          rightpressed = false;
      }
  })
});

var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext('2d');
var raf;
var switchDirection = [
  true, true, true, true, true, true, true,
  true, true, true, true, true, true, true,
  true, true, true, true, true, true, true];

function alien() {
if (canvas.getContext) {

var alienOne = new Spaceships(50, 75, 'rgb(192, 192, 192)', 50, 50);
var alienTwo = new Spaceships(200, 75, 'rgb(192, 192, 192)', 50, 50);
var alienThree = new Spaceships(350, 75, 'rgb(192, 192, 192)', 50, 50);
var alienFour = new Spaceships(500, 75, 'rgb(192, 192, 192)', 50, 50);
var alienFive = new Spaceships(650, 75, 'rgb(192, 192, 192)', 50, 50);
var alienSix = new Spaceships(800, 75, 'rgb(192, 192, 192)', 50, 50);
var alienSeven = new Spaceships(950, 75, 'rgb(192, 192, 192)', 50, 50);

var alien1 = new Spaceships(100, 175, 'color', 50, 50);
var alien2 = new Spaceships(250, 175, 'color', 50, 50);
var alien3 = new Spaceships(400, 175, 'color', 50, 50);
var alien4 = new Spaceships(550, 175, 'color', 50, 50);
var alien5 = new Spaceships(700, 175, 'color', 50, 50);
var alien6 = new Spaceships(850, 175, 'color', 50, 50);
var alien7 = new Spaceships(1000, 175, 'color', 50, 50);

var alienI = new Spaceships(50, 275, 'color', 50, 50);
var alienII = new Spaceships(200, 275, 'color', 50, 50);
var alienIII = new Spaceships(350, 275, 'color', 50, 50);
var alienIV = new Spaceships(500, 275, 'color', 50, 50);
var alienV = new Spaceships(650, 275, 'color', 50, 50);
var alienVI = new Spaceships(800, 275, 'color', 50, 50);
var alienVII = new Spaceships(950, 275, 'color', 50, 50);

// var fighter = new Spaceships(600, 550, 'red', 50, 30);

alienOne.draw();
alienTwo.draw();
alienThree.draw();
alienFour.draw();
alienFive.draw();
alienSix.draw();
alienSeven.draw();

alien1.draw();
alien2.draw();
alien3.draw();
alien4.draw();
alien5.draw();
alien6.draw();
alien7.draw();

alienI.draw();
alienII.draw();
alienIII.draw();
alienIV.draw();
alienV.draw();
alienVI.draw();
alienVII.draw();


var x_fighter = 600;
var y_fighter = 550;

function fighterMove() {
  ctx.beginPath();
  var image = new Image()
  image.src = "http://vignette2.wikia.nocookie.net/spaceinvaders/images/c/cb/Space-invaders.jpg/revision/latest?cb=20130701092122"
  ctx.drawImage(image, x_fighter, y_fighter, 50, 30);
  ctx.closePath();
  ctx.fill();
};

// alien animation
setInterval(function redraw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    fighterMove();
    if (rightpressed && x_fighter < 1200) {
      x_fighter += 10;
    } else if (leftpressed && x_fighter > 10) {
      x_fighter -= 10
    }


  // first square
  if (alienOne.x == 150) {
    switchDirection[0] = false;
  } else if (alienOne.x == 50) {
    switchDirection[0] = true;
  }
      if (switchDirection[0] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienOne.draw();
        alienOne.x += 1/2;
      } else if (switchDirection[0] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienOne.draw();
        alienOne.x -= 1/2;
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
        alienTwo.x += 1/2;
      } else if (switchDirection[1] == false) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienTwo.draw();
        alienTwo.x -= 1/2;
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
        alienThree.x += 1/2;
      } else if (switchDirection[2] == false) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienThree.draw();
        alienThree.x -= 1/2;
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
        alienFour.x += 1/2;
      } else if (switchDirection[3] == false) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienFour.draw();
        alienFour.x -= 1/2;
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
        alienFive.x += 1/2;
      } else if (switchDirection[4] == false) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienFive.draw();
        alienFive.x -= 1/2;
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
        alienSix.x += 1/2;
      } else if (switchDirection[5] == false) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienSix.draw();
        alienSix.x -= 1/2;
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
        alienSeven.x += 1/2;
      } else if (switchDirection[6] == false) {
        // ctx.clearRect(alienTwo.x, 100, canvas.width, canvas.height);
        alienSeven.draw();
        alienSeven.x -= 1/2;
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
        alien1.x += 3/5;
      } else if (switchDirection[7] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien1.draw();
        alien1.x -= 3/5;
      }

  if (alien2.x >= 350) {
    switchDirection[8] = false;
  } else if (alien2.x <= 250) {
    switchDirection[8] = true;
  }
      if (switchDirection[8] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien2.draw();
        alien2.x += 3/5;
      } else if (switchDirection[8] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien2.draw();
        alien2.x -= 3/5;
      }

  if (alien3.x >= 500) {
    switchDirection[9] = false;
  } else if (alien3.x <= 400) {
    switchDirection[9] = true;
  }
      if (switchDirection[9] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien3.draw();
        alien3.x += 3/5;
      } else if (switchDirection[9] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien3.draw();
        alien3.x -= 3/5;
      }

  if (alien4.x >= 650) {
    switchDirection[10] = false;
  } else if (alien4.x <= 550) {
    switchDirection[10] = true;
  }
      if (switchDirection[10] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien4.draw();
        alien4.x += 3/5;
      } else if (switchDirection[10] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien4.draw();
        alien4.x -= 3/5;
      }

  if (alien5.x >= 800) {
    switchDirection[11] = false;
  } else if (alien5.x <= 700) {
    switchDirection[11] = true;
  }
      if (switchDirection[11] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien5.draw();
        alien5.x += 3/5;
      } else if (switchDirection[11] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien5.draw();
        alien5.x -= 3/5;
      }

  if (alien6.x >= 950) {
    switchDirection[12] = false;
  } else if (alien6.x <= 850) {
    switchDirection[12] = true;
  }
      if (switchDirection[12] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien6.draw();
        alien6.x += 3/5;
      } else if (switchDirection[12] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien6.draw();
        alien6.x -= 3/5;
      }

  if (alien7.x >= 1100) {
    switchDirection[13] = false;
  } else if (alien7.x <= 1000) {
    switchDirection[13] = true;
  }
      if (switchDirection[13] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien7.draw();
        alien7.x += 3/5;
      } else if (switchDirection[13] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alien7.draw();
        alien7.x -= 3/5;
      }

  if (alienI.x >= 150) {
    switchDirection[14] = false;
  } else if (alienI.x <= 50) {
    switchDirection[14] = true;
  }
      if (switchDirection[14] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienI.draw();
        alienI.x += 7/12;
      } else if (switchDirection[14] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienI.draw();
        alienI.x -= 7/12;
      }

  if (alienII.x >= 300) {
    switchDirection[15] = false;
  } else if (alienII.x <= 200) {
    switchDirection[15] = true;
  }
      if (switchDirection[15] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienII.draw();
        alienII.x += 7/12;
      } else if (switchDirection[15] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienII.draw();
        alienII.x -= 7/12;
      }

  if (alienIII.x >= 450) {
    switchDirection[16] = false;
  } else if (alienIII.x <= 350) {
    switchDirection[16] = true;
  }
      if (switchDirection[16] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienIII.draw();
        alienIII.x += 7/12;
      } else if (switchDirection[16] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienIII.draw();
        alienIII.x -= 7/12;
      }

  if (alienIV.x >= 600) {
    switchDirection[17] = false;
  } else if (alienIV.x <= 500) {
    switchDirection[17] = true;
  }
      if (switchDirection[17] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienIV.draw();
        alienIV.x += 7/12;
      } else if (switchDirection[17] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienIV.draw();
        alienIV.x -= 7/12;
      }

  if (alienV.x >= 750) {
    switchDirection[18] = false;
  } else if (alienV.x <= 650) {
    switchDirection[18] = true;
  }
      if (switchDirection[18] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienV.draw();
        alienV.x += 7/12;
      } else if (switchDirection[18] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienV.draw();
        alienV.x -= 7/12;
      }

  if (alienVI.x >= 900) {
    switchDirection[19] = false;
  } else if (alienVI.x <= 800) {
    switchDirection[19] = true;
  }
      if (switchDirection[19] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienVI.draw();
        alienVI.x += 7/12;
      } else if (switchDirection[19] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienVI.draw();
        alienVI.x -= 7/12;
      }

  if (alienVII.x >= 1050) {
    switchDirection[20] = false;
  } else if (alienVII.x <= 950) {
    switchDirection[20] = true;
  }
      if (switchDirection[20] == true) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienVII.draw();
        alienVII.x += 7/12;
      } else if (switchDirection[20] == false) {
        // ctx.clearRect(alienOne.x, 100, canvas.width, canvas.height);
        alienVII.draw();
        alienVII.x -= 7/12;
      }

}, 10);


} else {
  alert('you need a better browser to play this game')
  }
};
alien();
