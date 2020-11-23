class helpScene2 extends Phaser.Scene {
  constructor() {
    super("ayuda_2");
  }
  create() {
    var Ayuda2 = Phaser.Math.RND.pick(Idioma.juego.ayuda2);

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
    this.add.image(960, 540, "ayuda").setInteractive().setScale(1).setFlip(1);

    this.add
      .text(640, 160, Ayuda2, {
        fontFamily: "font1",
        fontSize: "34px",
        lineSpacing: 6,
      })
      .setTint(0x454545);

    this.add.image(470, 910, "flechaPD").setFlip(1).setScale(0.75);

    var flecha = this.add
      .image(470, 910, "flechaP_s")
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer" })
      .setFlip(1)
      .setScale(0.75);

    flecha.on("pointerover", () => {
      flecha.setAlpha(1);
    });

    flecha.on("pointerout", () => {
      flecha.setAlpha(0.001);
    });

    flecha.on("pointerdown", () => {
      this.scene.sleep();
      this.scene.run("ayuda_1");
    });
  }
}