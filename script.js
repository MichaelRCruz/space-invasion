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

function alien() {

if (canvas.getContext) {

  var alienOne = {
    x: 100,
    y: 100,
    color: 'rgb(192, 192, 192)',
    draw: function() {
      ctx.beginPath();
      ctx.rect(this.x, this.y, 50, 50);
      ctx.closePath();
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }
  draw();

  function draw() {
    ctx.clearRect(0,0, canvas.width, canvas.height);
    alienOne.draw();
    alienOne.x += 1
    // raf = window.requestAnimationFrame(draw);
  }

alienOne.draw();

} else {
  alert('you need a better browser to play this game')
  }
};
alien();
