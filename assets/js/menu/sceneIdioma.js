class sceneIdioma extends Phaser.Scene {
  constructor() {
    super("scene_Idioma");
  }

  create() {
    this.add.image(960, 540, "botonIdioma");

    var Idioma1 = this.add
      .image(960, 540, "botonES")
      .setDepth(1)
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var Idioma2 = this.add
      .image(960, 540, "botonEN")
      .setDepth(1)
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var Idioma3 = this.add
      .image(960, 540, "botonPT")
      .setDepth(1)
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    Idioma1.on("pointerdown", () => {
      selecIdioma = "es";
      Idioma = this.game.cache.json.get("es_ES");
      this.scene.start("Menu");
    });
    Idioma1.on("pointerover", () => {
      Idioma1.setAlpha(1);
    });
    Idioma1.on("pointerout", () => {
      Idioma1.setAlpha(0.001);
    });

    Idioma2.on("pointerdown", () => {
      selecIdioma = "en";
      Idioma = this.game.cache.json.get("en_EN");
      this.scene.start("Menu");
    });
    Idioma2.on("pointerover", () => {
      Idioma2.setAlpha(1);
    });
    Idioma2.on("pointerout", () => {
      Idioma2.setAlpha(0.001);
    });

    Idioma3.on("pointerdown", () => {
      selecIdioma = "pt";
      Idioma = this.game.cache.json.get("pt_PT");
      this.scene.start("Menu");
    });
    Idioma3.on("pointerover", () => {
      Idioma3.setAlpha(1);
    });
    Idioma3.on("pointerout", () => {
      Idioma3.setAlpha(0.001);
    });
  }
}
