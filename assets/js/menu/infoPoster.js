class infoPoster extends Phaser.Scene {
  constructor() {
    super("postersintomas");
  }

  create() {
    var negro = this.add
      .image(551, 310, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });

    negro.on("pointerdown", () => {
      this.scene.sleep();
      this.scene.resume("juego3");
    });

    this.add.image(550, 300, "poster").setInteractive();
  }
}
