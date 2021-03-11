let font
let graphic

function preload() {
  font = loadFont('spacegrotesk-medium.otf')
}

function setup() {
  createCanvas(500, 500)
}

function setup() {
  createCanvas(1200, 1200)

  graphic = createGraphics(1200, 1200)

  graphic.fill('#ffcc33')
  graphic.textFont(font)
  graphic.textSize(300)
  graphic.textAlign(CENTER, CENTER)
  graphic.text('Soon', 1200 / 2, 1200 / 2)
}

function draw() {
  background('#2C7744')

  let val = sin(frameCount * 0.05) * 450

  copy(graphic, 0, 0, 1200, 1200, 0, 0, 550 + val, 1200)
  copy(graphic, 0, 0, 1200, 1200, 550 + val, 0, 550 - val, 1200)
}
