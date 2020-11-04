class helpScene extends Phaser.Scene {
  constructor() {
    super("ayuda_1");
  }

  create() {
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
    this.add.image(960, 540, "ayuda").setInteractive().setScale(1.7);
  }
}
