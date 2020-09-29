class relojTuto extends Phaser.Scene {
  constructor() {
    super("clock");
  }

  create() {
    var reloj = this.add.sprite(1050, 550, "reloj").setDepth(1);
    barraR = this.add.sprite(reloj.x, reloj.y, "arena");
    barraRmask = this.add
      .sprite(barraR.x, barraR.y, "arena2")
      .setScale(1, 0.92);
    var tapaMask = this.add.image(1050, 550, "arena2").setVisible(false);
    var mask = tapaMask.createBitmapMask();
    barraRmask.setMask(mask);

    let gametimer = this.time.addEvent({
      delay: 0,
      callback: event,
      callbackScope: this,
      loop: true,
    });
  }
}

function event() {
  if (tiempo > 3300) {
    stepHeight = barraRmask.displayHeight / tiempo;
    tiempo--;
    barraRmask.y += stepHeight;
  }
  if (tiempo == 3300) {
    score -= 240;
    tiempo--;
  }
}
