class SceneC extends Phaser.Scene {
  constructor() {
    super("clock");
  }

  create() {
    this.timeLeft = tiempo;
    let reloj = this.add.sprite(1050, 550, "reloj").setDepth(1);
    let barraR = this.add.sprite(reloj.x, reloj.y, "arena");
    this.barraRmask = this.add
      .sprite(barraR.x, barraR.y, "arena2")
      .setScale(1, 0.95);
    this.barraRmask.visible = true;
    this.gameTimer = this.time.addEvent({
      delay: 310,
      callback: function () {
        this.timeLeft--;

        let stepHeight = this.barraRmask.displayHeight / tiempo;

        this.barraRmask.y += stepHeight;
        if (this.timeLeft == 0) {
          score -= 240;
        }
      },
      callbackScope: this,
      loop: true,
    });
    var tapaMask = this.add.image(1050, 550, "arena2").setVisible(false);
    var mask = tapaMask.createBitmapMask();
    this.barraRmask.setMask(mask);
  }
}
