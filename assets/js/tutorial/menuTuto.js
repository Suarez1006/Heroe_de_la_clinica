class menuTuto extends Phaser.Scene {
  constructor() {
    super("Menu3");
  }

  create() {
    var Nombre = Phaser.Math.RND.pick(Idioma.tutorial.menuTuto.nombre);
    var Edad = Phaser.Math.RND.pick(Idioma.tutorial.menuTuto.edad);
    var GSanguineo = Phaser.Math.RND.pick(Idioma.tutorial.menuTuto.gSanguineo);
    var Estatura = Phaser.Math.RND.pick(Idioma.tutorial.menuTuto.estatura);

    var sep1;
    var sep2;

    selloPS = 0;
    selloPE = 0;
    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });
    this.add.image(750, 540, "fichaTuto").setInteractive();

    this.add.image(752, 355, "fichaFotoTuto");

    this.add
      .image(1124, 732.5, "separador_pac_s")
      .setScale(0.45)
      .setAlpha(1)
      .setDepth(0.001);

    sep2 = this.add
      .image(1123, 800.9, "separador_var_s")
      .setScale(0.45)
      .setAlpha(0.001)
      .setDepth(1)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });
    sep2.on("pointerover", () => {
      sep2.setAlpha(1);
    });
    sep2.on("pointerout", () => {
      sep2.setAlpha(0.001);
    });

    sep2.on("pointerdown", () => {
      this.scene.sleep("Menu3");
      this.scene.run("var_Tuto");
      fichaVolver = 1;
    });

    this.add
      .text(500, 600, Nombre, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(1000, 600, "Arnone, Juan", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(1020, 610, "___________________________________", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(500, 660, GSanguineo, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(1000, 660, "A-", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);
    this.add
      .text(1020, 670, "___________________________________", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(500, 720, Estatura, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(1000, 720, "184cm", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);
    this.add
      .text(1020, 730, "___________________________________", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

    this.add
      .text(500, 780, Edad, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(1000, 780, "32", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);
    this.add
      .text(1020, 790, "___________________________________", {
        fontFamily: "font1",
        fontSize: "40px",
        align: "right",
      })
      .setTint(0x454545)
      .setOrigin(1, 0.5);

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
