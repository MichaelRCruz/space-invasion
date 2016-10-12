$(document).ready(function() {
    var leftpressed = false;
    var rightpressed = false;
    var x_fighter = 600;
    var y_fighter = 550;
    var laserWidth = 2;
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext('2d');
    var raf;
    var laser_y = 530;
    var bullets = [];
    var switchDirection = [
    true, true, true, true, true, true, true,
    true, true, true, true, true, true, true,
    true, true, true, true, true, true, true
    ];

    var collision = [
    true, true, true, true, true, true, true,
    true, true, true, true, true, true, true,
    true, true, true, true, true, true, true
    ];

    if (canvas.getContext) {
        var alienOne = new Spaceships(50, 75, 'rgb(192, 192, 192)', "assets/space-large.png");
        var alienTwo = new Spaceships(200, 75, 'rgb(192, 192, 192)', "assets/space-large.png");
        var alienThree = new Spaceships(350, 75, 'rgb(192, 192, 192)', "assets/space-large.png");
        var alienFour = new Spaceships(500, 75, 'rgb(192, 192, 192)', "assets/space-large.png");
        var alienFive = new Spaceships(650, 75, 'rgb(192, 192, 192)', "assets/space-large.png");
        var alienSix = new Spaceships(800, 75, 'rgb(192, 192, 192)', "assets/space-large.png");
        var alienSeven = new Spaceships(950, 75, 'rgb(192, 192, 192)', "assets/space-large.png");

        var alien1 = new Spaceships(100, 175, 'color', "assets/Space-small-invader.png");
        var alien2 = new Spaceships(250, 175, 'color', "assets/Space-small-invader.png");
        var alien3 = new Spaceships(400, 175, 'color', "assets/Space-small-invader.png");
        var alien4 = new Spaceships(550, 175, 'color', "assets/Space-small-invader.png");
        var alien5 = new Spaceships(700, 175, 'color', "assets/Space-small-invader.png");
        var alien6 = new Spaceships(850, 175, 'color', "assets/Space-small-invader.png");
        var alien7 = new Spaceships(1000, 175, 'color', "assets/Space-small-invader.png");

        var alienI = new Spaceships(50, 275, 'color', "assets/Space-medium-invader.png");
        var alienII = new Spaceships(200, 275, 'color', "assets/Space-medium-invader.png");
        var alienIII = new Spaceships(350, 275, 'color', "assets/Space-medium-invader.png");
        var alienIV = new Spaceships(500, 275, 'color', "assets/Space-medium-invader.png");
        var alienV = new Spaceships(650, 275, 'color', "assets/Space-medium-invader.png");
        var alienVI = new Spaceships(800, 275, 'color', "assets/Space-medium-invader.png");
        var alienVII = new Spaceships(950, 275, 'color', "assets/Space-medium-invader.png");

        var aliens = [
            alienOne, alienTwo, alienThree, alienFour, alienFive, alienSix, alienSeven,
            alien1, alien2, alien3, alien4, alien5, alien6, alien7,
            alienI, alienII, alienIII, alienIV, alienV, alienVI, alienVII
        ];

        setInterval(function redraw() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            fighterMove();

            if (rightpressed && x_fighter < 1200) {
                x_fighter += 10;
            } else if (leftpressed && x_fighter > 10) {
                x_fighter -= 10
            }

            bullets.forEach(function(bullet) {
                bullet.draw();
            });

            for (var i = 0; i < aliens.length; i++) {
                for (var j = bullets.length - 1; j >= 0; j--) {
                    if (bullets[j].y > aliens[i].y && bullets[j].y < aliens[i].y + aliens[i].height && bullets[j].x > aliens[i].x && bullets[j].x < aliens[i].x + aliens[i].width) {
                        aliens[i].alive = false;
                        aliens[i] = new Spaceships(-50, -50, 'rgb(192, 192, 192)', "assets/space-large.png");
                        bullets.splice(j, 1);
                    }
                }
            }

            var yOne = 150;
            var xOne = 50;
            for (var i = 0; i < 7; i++) {
                if (aliens[i].x >= yOne) {
                    switchDirection[i] = false;
                } else if (aliens[i].x <= xOne) {
                    switchDirection[i] = true;
                }
                if (switchDirection[i] == true && aliens[i].alive == true) {
                    aliens[i].draw();
                    aliens[i].x += 3/5;
                } else if (switchDirection[i] == false && aliens[i].alive == true) {
                    aliens[i].draw();
                    aliens[i].x -= 3/5;
                }
                yOne += 150;
                xOne += 150;
            };

            var y1 = 200;
            var x1 = 100;
            for (var i = 7; i < 14; i++) {
                if (aliens[i].x >= y1) {
                    switchDirection[i] = false;
                } else if (aliens[i].x <= x1) {
                    switchDirection[i] = true;
                }
                if (switchDirection[i] == true && aliens[i].alive == true) {
                    aliens[i].draw();
                    aliens[i].x += 1 / 2;
                } else if (switchDirection[i] == false && aliens[i].alive == true) {
                    aliens[i].draw();
                    aliens[i].x -= 1 / 2;
                }
                y1 += 150;
                x1 += 150;
            };

            var yI = 150;
            var xI = 50;
            for (var i = 14; i < 21; i++) {
                if (aliens[i].x >= yI) {
                    switchDirection[i] = false;
                } else if (aliens[i].x <= xI) {
                    switchDirection[i] = true;
                }
                if (switchDirection[i] == true && aliens[i].alive == true) {
                    aliens[i].draw();
                    aliens[i].x += 1 / 3;
                } else if (switchDirection[i] == false && aliens[i].alive == true) {
                    aliens[i].draw();
                    aliens[i].x -= 1 / 3;
                }
                yI += 150;
                xI += 150;
            };
        }, 10);
    } else {
        alert('you need a better browser to play this game')
    }

    function Spaceships(x, y, color, src) {
        this.x = x
        this.y = y
        this.color = color
        this.width = 50
        this.height = 50
        this.alive = true
        var image = new Image()
        image.src = src

        this.draw = function() {
            ctx.beginPath();
            ctx.drawImage(image, this.x, this.y, this.width, this.height);
            ctx.closePath();
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    };

    function fighterMove() {
        ctx.beginPath();
        var image = new Image()
        image.src = "http://vignette2.wikia.nocookie.net/spaceinvaders/images/c/cb/Space-invaders.jpg/revision/latest?cb=20130701092122"
        ctx.drawImage(image, x_fighter, y_fighter, 50, 30);
        ctx.closePath();
        ctx.fill();
    };

    function LaserBullet(current_x) {
        this.y = 530;
        this.x = current_x;
        this.draw = function() {
            if (this.y > 0) {
                ctx.beginPath();
                ctx.fillStyle = "red";
                ctx.fillRect(this.x + 23.5, this.y, 2, 10);
                ctx.closePath();
                this.y -= 5;
            }
        }
    };

    $(document).keydown(function(e) {
        if (e.keyCode === 37) {
            leftpressed = true;
        } else if (e.keyCode === 39) {
            rightpressed = true;
        } else if (e.keyCode === 38) {
            var bullet = new LaserBullet(x_fighter);
            bullets.push(bullet);
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
