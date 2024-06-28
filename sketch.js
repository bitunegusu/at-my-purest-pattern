let rez = 0.02;
let t = 0;
let space = 19;
let size = 13;
let colorx = 1;
let colory = 1;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  angleMode(DEGREES);
  background(0);
  for (let i = 0; i < width; i += space) {
    for (let j = 0; j < height; j += space) {
      var n = noise(i * rez, j * rez, 15 * t);

      if (colorx % 2 === 0 && colory % 2 == 0) {
        fill(n * 138, n * 655, n * 0, 55);
        textSize(size + n * 5); // Varying text size
        textStyle(ITALIC); // Varying text style
        textFont('Arial'); // Varying text font
        text('error', i - 15, j + 9); // Adjusted text position
      } else {
        fill(n * 544, n * 85, n * 255, 255);
        textSize(size - n * 3); // Varying text size
        textStyle(NORMAL); // Varying text style
        textFont('Georgia'); // Varying text font
        text('success', i, j); // Adjusted text position
      }
    }
    t += 0.0002;
    colorx += 1;
    colory -= 9;
  }
}
