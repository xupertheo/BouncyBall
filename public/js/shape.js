function Shape(data) {
  this.type = data.type;

  // change the corners to the value goes from 0 to 1000
  var interval = setInterval(function() {
    if(width && height) {
      for(var i = 0; i < data.corners.length; i++) {
        data.corners[i] = {
          x: data.corners[i].x * width / 1000,
          y: data.corners[i].y * height / 1000
        }
      }
      clearInterval(interval);
    }
  });

  this.corners = [];

  if(this.type === "shape") {
    this.corners = data.corners;
  } else if(this.type === "rect") {
    this.corners.push(data.corners[0]);
    this.corners.push({
      x: data.corners[1].x,
      y: data.corners[0].y
    });
    this.corners.push(data.corners[1]);
    this.corners.push({
      x: data.corners[0].x,
      y: data.corners[1].y
    });
  }
}

Shape.prototype.show = function() {
  fill(150);
  noStroke()
  beginShape()
  for (var i = 0; i < this.corners.length; i++) {
    var x = width / 1000 * this.corners[i].x;
    var y = height / 1000 * this.corners[i].y;
    vertex(x, y);
  }
  endShape(CLOSE);
}
