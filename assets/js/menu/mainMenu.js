class mainMenu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  create() {
    this.add.image(960, 540, "inicio");

    var play = this.add
      .image(960, 954, "boton_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var playT = this.add
      .text(960, 954, "Jugar", {
        fontFamily: "font1",
        fontSize: "35px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    var credits = this.add
      .image(1524, 994, "boton_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var creditsT = this.add
      .text(1524, 994, "Creditos", {
        fontFamily: "font1",
        fontSize: "35px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
    var ayuda = this.add
      .image(396, 994, "boton_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var ayudaT = this.add
      .text(396, 994, "Ayuda", {
        fontFamily: "font1",
        fontSize: "35px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
    play.on("pointerdown", () => {
      this.scene.start("juego");
      this.scene.start("clock");
    });

    play.on("pointerover", () => {
      play.setAlpha(1);
      playT.setTint(0xefefef);
    });
    play.on("pointerout", () => {
      play.setAlpha(0.01);
      playT.setTint(0x454545);
    });

    credits.on("pointerdown", () => {
      this.scene.start("creditos");
    });
    credits.on("pointerover", () => {
      credits.setAlpha(1);
      creditsT.setTint(0xefefef);
    });
    credits.on("pointerout", () => {
      credits.setAlpha(0.01);
      creditsT.setTint(0x454545);
    });

    ayuda.on("pointerdown", () => {
      pausa = 1;
      this.scene.run("ayuda_1");
      ayuda.setAlpha(0.01);
      ayudaT.setTint(0x454545);
    });
    ayuda.on("pointerover", () => {
      ayuda.setAlpha(1);
      ayudaT.setTint(0xefefef);
    });
    ayuda.on("pointerout", () => {
      ayuda.setAlpha(0.01);
      ayudaT.setTint(0x454545);
    });
  }
}
