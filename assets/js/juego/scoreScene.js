class scoreScene extends Phaser.Scene {
  constructor() {
    super("FinalScore");
  }

  create() {
    var Calif = Phaser.Math.RND.pick(Idioma.juego.score.calificaciones);
    var Salv = Phaser.Math.RND.pick(Idioma.juego.score.salvacion);

    this.add.image(960, 540, "final");

    promedio = finalScore / 4;

    this.add
      .text(1100, 700, finalSalv + "/8", {
        fontFamily: "font1",
        fontSize: "200px",
        align: "center",
      })
      .setOrigin(0.5)
      .setScale(0.7)
      .setTint(0x454545);

    this.add
      .text(300, 450, Calif, {
        fontFamily: "font1",
        fontSize: "75px",
        align: "left",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(300, 700, Salv, {
        fontFamily: "font1",
        fontSize: "75px",
        align: "left",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    var E = this.add
      .image(1100, 450, "E")
      .setAlpha(0)
      .setScale(1.2)
      .setTint(0x454545);

    var MB = this.add
      .image(E.x, E.y, "MB")
      .setAlpha(0)
      .setScale(1.2)
      .setTint(0x454545);

    var B = this.add
      .image(E.x, E.y, "B")
      .setAlpha(0)
      .setScale(1.2)
      .setTint(0x454545);

    var S = this.add
      .image(E.x, E.y, "S")
      .setAlpha(0)
      .setScale(1.2)
      .setTint(0x454545);

    var NS = this.add
      .image(E.x, E.y, "NS")
      .setAlpha(0)
      .setScale(1.2)
      .setTint(0x454545);

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
