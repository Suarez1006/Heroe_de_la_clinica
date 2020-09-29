class scoreScene extends Phaser.Scene {
  constructor() {
    super("FinalScore");
  }

  create() {
    this.add.image(551, 310, "final");

    var promedio = finalScore / pacientes;

    this.add
      .text(551, 412, finalSalv, {
        fontFamily: "font2",
        fontSize: "80px",
      })
      .setOrigin(0.5)
      .setScale(0.7);

    var E = this.add.image(550, 230, "E").setAlpha(0).setScale(1.2);

    var MB = this.add.image(550, 230, "MB").setAlpha(0).setScale(1.2);

    var B = this.add.image(550, 230, "B").setAlpha(0).setScale(1.2);

    var S = this.add.image(550, 230, "S").setAlpha(0).setScale(1.2);

    var NS = this.add.image(550, 230, "NS").setAlpha(0).setScale(1.2);

    if (promedio >= 1000) {
      E.setAlpha(1);
      salv += 1;
    } else if (promedio >= 800) {
      MB.setAlpha(1);
    } else if (promedio >= 700) {
      B.setAlpha(1);
    } else if (promedio >= 600) {
      S.setAlpha(1);
    } else {
      NS.setAlpha(1);
    }
  }
}
