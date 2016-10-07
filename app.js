function Spaceships(x) {
  this.x = x
  this.y = y
  this.color = 'rgb(192, 192, 192)'
  this.draw = function() {
    ctx.beginPath();
    ctx.rect(this.x, this.y, 100, 100);
    ctx.closePath();
    ctx.fillStyle = this.color;
    ctx.fill();
  };
};

var alienOne = new Spaceships(100);





// var cat = new Animals('fluffy', 'feline', 'toby', false)
// var bird = new Animals('pauly', 'parakeet', 'foul', true)
