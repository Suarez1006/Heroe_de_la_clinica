class Scene5_E extends Phaser.Scene {
  constructor() {
    super("score_E");
  }

  create() {
    selloPE = 0;
    selloPS = 0;
    this.add.image(551, 310, "scoreE");

    var V = this.add
      .image(440, 518.5, "hitbox")
      .setScale(0.78, 0.07)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    V.on("pointerdown", () => {
      this.scene.restart("juego");
      this.scene.restart("juego2");
      this.scene.sleep("juego");
      this.scene.sleep("juego2");
      this.scene.sleep("clock");
      this.scene.start("Menu");
      score = 240;
      salv = 0;
      tiempo = 10000;
    });
    
    var sig = this.add
      .image(660, 518.5, "hitbox")
      .setScale(0.78, 0.07)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    sig.on("pointerdown", () => {
      score = 240;
      salv = 0;
      tiempo = 10000;
      this.scene.restart("charla_01");
      this.scene.sleep("juego");
      this.scene.sleep("juego2");
      this.scene.sleep("clock");
      this.scene.start("sintomasPick");
    });

    var E = this.add.image(550, 250, "E").setAlpha(0.01);

    var MB = this.add.image(550, 250, "MB").setAlpha(0.01);

    var B = this.add.image(550, 250, "B").setAlpha(0.01);

    var S = this.add.image(550, 250, "S").setAlpha(0.01);

    var NS = this.add.image(550, 250, "NS").setAlpha(0.01);

    var s0 = this.add.image(555, 450, "0").setAlpha(0.01);
    var s1 = this.add.image(555, 450, "1").setAlpha(0.01);
    var s2 = this.add.image(555, 450, "2").setAlpha(0.01);

    if (score >= 1000) {
      E.setAlpha(1);
      salv += 1;
    } else if (score >= 800) {
      MB.setAlpha(1);
    } else if (score >= 700) {
      B.setAlpha(1);
    } else if (score >= 600) {
      S.setAlpha(1);
    } else {
      NS.setAlpha(1);
    }

    if (salv == 2) {
      s2.setAlpha(1);
    } else if (salv == 1) {
      s1.setAlpha(1);
    } else if (salv == 0) {
      s0.setAlpha(1);
    }
  }
}
