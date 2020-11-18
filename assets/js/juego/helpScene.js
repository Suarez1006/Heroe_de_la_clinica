class helpScene extends Phaser.Scene {
  constructor() {
    super("ayuda_1");
  }

  create() {
    var Ayuda1 = Phaser.Math.RND.pick(Idioma.juego.ayuda1);
    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.3)
      .setInteractive({ cursor: "pointer" });

    negro.on("pointerdown", () => {
      this.scene.sleep();
      if (help == 5) {
        console.log("resumo");
        this.scene.resume("Menu2");
      }
    });
    this.add.image(960, 540, "ayuda").setInteractive().setScale(1);

    this.add
      .text(650, 160, Ayuda1, {
        fontFamily: "font1",
        fontSize: "34px",
        lineSpacing: 6,
      })
      .setTint(0x454545);

    this.add.image(1450, 910, "flechaPD").setScale(0.75);

    var flecha = this.add
      .image(1450, 910, "flechaP_s")
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer" })
      .setScale(0.75);

    flecha.on("pointerover", () => {
      flecha.setAlpha(1);
    });

    flecha.on("pointerout", () => {
      flecha.setAlpha(0.001);
    });

    flecha.on("pointerdown", () => {
      this.scene.sleep();
      this.scene.run("ayuda_2");
    });
  }
}
//
