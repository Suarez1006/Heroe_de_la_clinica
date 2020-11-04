class creditScene extends Phaser.Scene {
  constructor() {
    super("creditos");
  }

  preload() {
    this.load.image("cre_scene", "assets/imagenes/fondos/scene0.png");
  }
  create() {
    this.add.image(960, 540, "cre_scene");

    var volver = this.add
      .image(1590, 45, "hitbox")
      .setAlpha(0.03)
      .setInteractive({ useHandCursor: true })
      .setScale(1.5, 0.2)
      .setOrigin(0);

    volver.on("pointerdown", () => {
      this.scene.start("Menu");
    });
  }
}
