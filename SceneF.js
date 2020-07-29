class SceneF extends Phaser.Scene {
    constructor() {
      super("help10s");
    }
  
    create() {
      var negro = this.add
        .image(551, 310, "negro")
        .setAlpha(0.3)
        .setInteractive({ cursor: "pointer" });
  
      negro.on("pointerdown", () => {
        this.scene.sleep();
        this.scene.resume("juego");
      });
  
      this.add.image(550, 300, "infoB").setInteractive();
    }
  }
  