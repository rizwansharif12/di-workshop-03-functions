function setup() {
  createCanvas(600, 600)
}
// This changes the canvas size and the colour of the background.

function draw() {

  fill(255, 130, 0)
  stroke(0)
  background(0)
  roof(mouseX, mouseY+30, mouseX+40, mouseY, mouseX+80, mouseY+30)
  square(mouseX+5, mouseY+30, 70)
  roof(mouseX+80, mouseY+30, mouseX+120, mouseY, mouseX+160, mouseY+30)
  square(mouseX+86, mouseY+30, 70)
  roof(mouseX+160, mouseY+30, mouseX+200, mouseY, mouseX+240, mouseY+30)
  square(mouseX+165, mouseY+30, 70)

}
// The draw function changes the colour of the shapes and the sizes.

function square(x, y, size) {
  rect(x, y, size, size)
}


function roof(x1, y1, x2, y2, x3, y3) {
  triangle(x1, y1, x2, y2, x3, y3)
  // ...
}