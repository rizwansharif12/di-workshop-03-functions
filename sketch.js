function setup() {
  createCanvas(400, 400)
  background(255)
}
// This changes the canvas size and the colour of the background.

function draw() {
  fill(255, 130, 0)
  stroke(0)
  roof (0, 30, 40, 0, 80, 30)
  house (5, 30, 70)
}
// The draw function changes the colour of the shapes and the sizes.

function square(x, y, size) {
  rect(x, y, size, size)
}

function roof(x1, y1, x2, y2, x3, y3) {
  triangle(x1, y1, x2, y2, x3, y3)
  // ...
}

function house(x, y, size) {
  square(x, y, size)
  // ...
}