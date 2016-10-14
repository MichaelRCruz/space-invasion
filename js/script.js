var $restartButton = $( "<div id='restart'>Game Over! click to restart</div>");
var leftpressed = false;
var rightpressed = false;
var laserWidth = 2;
var canvas = $("#myCanvas")[0];
var ctx = canvas.getContext('2d');
var raf;
var laser_y = 530;
var speedFactor = 2;
var regHeight = 600;
var lives = 3;
var bullets = [];
var alienBullets = [];
var aliens = [];
var barriers = [];

var switchDirection = [
true, true, true, true, true, true, true,
true, true, true, true, true, true, true,
true, true, true, true, true, true, true
];

var alienAdjustment = [
true, true, true, true, true, true, true,
true, true, true, true, true, true, true,
true, true, true, true, true, true, true
];

$(document).ready(function() {

    if (canvas.getContext) {

        var j = 50;
        for (var i = 0; i < 7; i++) {
            aliens.push(new Spaceships(j, 75, "assets/space-large.png"));
            j += 150;
        };

        var k = 100
        for (var i = 7; i < 14; i++) {
            aliens.push(new Spaceships(k, 175, "assets/Space-small-invader.png"))
            k += 150
        };

        var l = 50
        for (var i = 14; i < 21; i++) {
            aliens.push(new Spaceships(l, 275, "assets/Space-medium-invader.png"))
            l += 150;
        };

        var m = 130;
        for (var i = 0; i < 3; i++) {
            var n = 440;
            for (var j = 0; j < 3; j++) {
                m = 130 + i * 400
                for (var k = 0; k < 3; k++) {
                    barriers.push(new Barriers(m, n));
                    m += 67;
                }
                n += 25;
            }
            m += 400;
        };

        var fighter = new FighterMove(600, 550, 60, 40, true);
        var lifeTwo = new FighterMove(90, 610, 60, 40, true);
        var lifeThree = new FighterMove(20, 610, 60, 40, true);

        window.begin = setInterval(function redraw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            for (var i = 0; i < barriers.length; i++) {
                if (barriers[i].alive) {
                    barriers[i].draw();
                }
            };

            fighter.alive ? fighter.draw() : null;
            lifeTwo.alive ? lifeTwo.draw() : null;
            lifeThree.alive ? lifeThree.draw() : null;

            bottomBorder();

            if (rightpressed && fighter.x < 1200) {
                fighter.x += 10;
            } else if (leftpressed && fighter.x > 10) {
                fighter.x -= 10
            }

            bullets.forEach(function(bullet) {
                bullet.draw();
            });

            alienBullets.forEach(function(bullet) {
                bullet.draw();
            });

            aliens.forEach(function(alien) {
                if (alien.alive) {
                    var randomNumber = Math.random();
                    if (randomNumber < .001) {
                      alien.fire();
                    };
                }
            });

            for (var i = 0; i < aliens.length; i++) {
                for (var j = bullets.length - 1; j >= 0; j--) {
                    if ( aliens[i].alive && bullets[j].y > aliens[i].y && bullets[j].y < aliens[i].y + aliens[i].height - 20 && bullets[j].x > aliens[i].x - 20 && bullets[j].x < aliens[i].x + aliens[i].width - 25) {
                        aliens[i].alive = false;
                        alienAdjustment[i] = false;
                        console.log(alienAdjustment);
                        win();
                        speedFactor += .3;
                        bullets.splice(j, 1);
                    } else if (bullets[j].y < 0) {
                        bullets.splice(j, 1);
                    }
                }
            };

            for (var i = 0; i < alienBullets.length; i++) {
                if (alienBullets[i].x > fighter.x - 20 && alienBullets[i].x < fighter.x + fighter.width - 20
                && alienBullets[i].y > fighter.y - 20 && alienBullets[i].y < fighter.y + fighter.height - 20) {
                    alienBullets.splice(i, 1);
                    fighter.alive = false;
                    lives--
                    lives == 2 ? lifeTwo.alive = false : null;
                    lives == 1 ? lifeThree.alive = false : null;
                    if (!lives) {
                        clearInterval(window.begin);
                        $('body').append($restartButton);
                    } else {
                      // change number of lives left on page
                      // set timeout to turn fighter.alive to true
                      console.log(lives);
                      setTimeout(function() {
                        fighter.alive = true;
                      }, 1500)
                    }
                } else if (alienBullets[i].y > regHeight - 25) {
                    alienBullets.splice(i, 1);
                }
            };

            var yOne = 260;
            var xOne = 50;
            var speedOne = speedFactor * 1/2
            for (var i = 0; i < 7; i++) {
                if (aliens[i].x >= yOne) {
                    switchDirection[i] = false;
                } else if (aliens[i].x <= xOne) {
                    switchDirection[i] = true;
                }
                if (switchDirection[i] == true && aliens[i].alive == true) {
                    aliens[i].draw();
                    aliens[i].x += speedOne;
                } else if (switchDirection[i] == false && aliens[i].alive == true) {
                    aliens[i].draw();
                    aliens[i].x -= speedOne;
                }
                yOne += 150;
                xOne += 150;
            };

            var y1 = 250;
            var x1 = 35;
            speed2 = speedFactor * 2/3
            for (var i = 7; i < 14; i++) {
                if (aliens[i].x >= y1) {
                    switchDirection[i] = false;
                } else if (aliens[i].x <= x1) {
                    switchDirection[i] = true;
                }
                if (switchDirection[i] == true && aliens[i].alive == true) {
                    aliens[i].draw();
                    aliens[i].x += speed2;
                } else if (switchDirection[i] == false && aliens[i].alive == true) {
                    aliens[i].draw();
                    aliens[i].x -= speed2;
                }
                y1 += 150;
                x1 += 150;
            };

            var yI = 260;
            var xI = 50;
            speedI = speedFactor * 9/10
            for (var i = 14; i < 21; i++) {
                if (aliens[i].x >= yI) {
                    switchDirection[i] = false;
                } else if (aliens[i].x <= xI) {
                    switchDirection[i] = true;
                }
                if (switchDirection[i] == true && aliens[i].alive == true) {
                    aliens[i].draw();
                    aliens[i].x += speedI;
                } else if (switchDirection[i] == false && aliens[i].alive == true) {
                    aliens[i].draw();
                    aliens[i].x -= speedI;
                }
                yI += 150;
                xI += 150;
            };
        }, 10);
    } else {
        alert('you need a better browser to play this game')
    }

    function bottomBorder() {
        ctx.beginPath();
        ctx.moveTo(0, 600);
        ctx.lineTo(1260, 600);
        ctx.strokeStyle = 'white';
        ctx.stroke();
    };

    function Spaceships(x, y, src) {
        this.x = x;
        this.y = y;
        this.limitRight = 0;
        this.width = 50;
        this.height = 50;
        this.alive = true;
        var image = new Image()
        image.src = src

        this.draw = function() {
            ctx.beginPath();
            ctx.drawImage(image, this.x, this.y, this.width, this.height);
            ctx.closePath();
            ctx.fill();
        }

        this.fire = function() {
            var bullet = new LaserBullet(this.y, this.x, 5, 10, "green", 20, 20, 5);
            alienBullets.push(bullet);
        }
    };

    function FighterMove(x, y, width, height, alive) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.alive = true;
        var image = new Image();
        image.src = "assets/our_hero.png";
        this.draw = function() {
            ctx.beginPath();
            ctx.drawImage(image, this.x, this.y, this.width, this.height);
            ctx.closePath();
            ctx.fill();
          }
    };

    function LaserBullet(current_y, current_x, width, height, color, adjust_x, adjust_y, direction) {
        this.y = current_y;
        this.x = current_x;
        this.width = width;
        this.height = height;
        this.color = color
        this.adjust_x = adjust_x;
        this.adjust_y = adjust_y;
        this.direction = direction;
        this.draw = function() {
                ctx.beginPath();
                ctx.fillStyle = this.color;
                ctx.fillRect(this.x + this.adjust_x, this.y + this.adjust_y, this.width, this.height);
                ctx.closePath();
                this.y += this.direction;
        }
    };

    function Barriers(x, y) {
        this.x = x;
        this.y = y;
        this.width = 67;
        this.height = 25;
        this.color = "green";
        this.alive = true;
        this.draw = function() {
          ctx.beginPath();
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x, this.y, this.width, this.height);
          ctx.closePath();
        }
    };

    function win() {
        var win = true;
        alienAdjustment.forEach(function(instance) {
            if (instance == true) {
                win = false;
            }
        })
        if (win) {
            alert('you win');
        }
    };

    $(document).keydown(function(e) {
        if (e.keyCode === 37) {
            leftpressed = true;
        } else if (e.keyCode === 39) {
            rightpressed = true;
        } else if (e.keyCode === 38 && fighter.alive == true) {
            var bullet = new LaserBullet(530, fighter.x, 3, 10, "red", 23.5, 0, -5);
            bullets.push(bullet);
            console.log(bullets);
        }
    });

    $(document).keyup(function(e) {
        if (e.keyCode === 37) {
            leftpressed = false;
        } else if (e.keyCode === 39) {
            rightpressed = false;
        }
    });

    $($restartButton).click(function(){
        document.location.reload();
    });
});
