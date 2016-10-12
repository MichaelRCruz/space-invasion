for (var j = 0; j < aliens.length; j++) {
      for (var i = 0; i < bullets.length; i++) {
        if (bullets[i].y < aliens[j].y && bullets[i].x > aliens[j].x && bullets[i].x < aliens[j].x + this.width) {
          bullets.pop();
          disappear(j);
          console.log('boom');
          };
        }
    }
