class menuTuto extends Phaser.Scene {
  constructor() {
    super("Menu3");
  }

  create() {
    var Nombre = Phaser.Math.RND.pick(Idioma.tutorial.menuTuto.nombre);
    var Edad = Phaser.Math.RND.pick(Idioma.tutorial.menuTuto.edad);
    var GSanguineo = Phaser.Math.RND.pick(Idioma.tutorial.menuTuto.gSanguineo);
    var Estatura = Phaser.Math.RND.pick(Idioma.tutorial.menuTuto.estatura);

    selloPS = 0;
    selloPE = 0;
    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });
    this.add.image(750, 540, "ficha").setInteractive();

    this.add.image(752, 355, "fichaFotoTuto");

    this.add
      .text(450, 600, Nombre, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(450, 780, Edad, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(450, 660, GSanguineo, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(450, 720, Estatura, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    // -------------------------------------------------

    negro.on("pointerdown", () => {
      this.scene.sleep("sepTuto");
      this.scene.sleep();
      if (pausa == 2) {
        this.scene.resume("juego");
        pausa = 0;
      } else if (pausa == 4) {
        this.scene.resume("juego2");
        pausa = 0;
      } else if (pausa == 7) {
        this.scene.resume("juego3");
        pausa = 0;
      } else if (pausa == 8) {
        this.scene.resume("juego4");
        pausa = 0;
      }
    });
  }
}