let font
let graphic

function preload () {
font = loadFont("spacegrotesk-medium.otf")
}

function setup () {
  createCanvas (600,600)
  
  graphic = createGraphics(600,600)
  
  graphic.fill("#f3c043")
  graphic.textFont(font)
  graphic.textSize(600)
  graphic.textAlign(CENTER, CENTER)
  graphic.text("hi", 300, 240)
}

function draw () {
  background ("#e84e3c")
  
  const tileSize = 50
  
  for (let x = 0; x < 12; x = x + 1) {
    for (let y = 0; y < 12; y = y + 1) {
      
      const distortion = sin(frameCount * 0.05 + x * 0.3 + y * 0.4) * 50 
      
      /* source */
       const sx = x * tileSize + distortion
       const sy = y * tileSize + distortion
       const sw = tileSize
       const sh = tileSize
       
       /* destination */
       const dx = x * tileSize 
       const dy = y * tileSize
       const dw = tileSize
       const dh = tileSize
       
       
  image(graphic, dx, dy, dw, dh, sx, sy, sw, sh)
  }
}
}
