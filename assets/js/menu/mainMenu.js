class mainMenu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }

  create() {
    this.add.image(551, 310, "inicio");

    var play = this.add
      .image(781, 496, "play")
      .setOrigin(0, 0)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var credits = this.add
      .image(420, 561, "credits")
      .setOrigin(0)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var ayuda = this.add
      .image(141, 492, "ayuda")
      .setOrigin(0)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    play.on("pointerdown", () => {
      this.scene.start("juego");
      //this.scene.start("score_E");
      this.scene.start("clock");
    });

    play.on("pointerover", () => {
      play.setAlpha(1);
    });
    play.on("pointerout", () => {
      play.setAlpha(0.01);
    });

    credits.on("pointerdown", () => {
      this.scene.start("creditos");
    });
    credits.on("pointerover", () => {
      credits.setAlpha(1);
    });
    credits.on("pointerout", () => {
      credits.setAlpha(0.01);
    });

    ayuda.on("pointerdown", () => {
      pausa = 1;
      this.scene.run("ayuda_1");
    });
    ayuda.on("pointerover", () => {
      ayuda.setAlpha(1);
    });
    ayuda.on("pointerout", () => {
      ayuda.setAlpha(0.01);
    });
  }
}
