class menuTuto extends Phaser.Scene {
  constructor() {
    super("Menu3");
  }

  create() {
    selloPS = 0;
    selloPE = 0;
    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });
    this.add.image(750, 540, "ficha").setInteractive();

    this.add.image(752, 355, "fichaFotoTuto");

    sep1 = this.add
      .image(1123, 661, "separador_pac_s")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.45)
      .setAlpha(1);
    sep1.on("pointerover", () => {
      sep1.setAlpha(1);
    });
    sep2 = this.add
      .image(1123, 800.9, "separador_var_s")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.45)
      .setAlpha(0.001);

    sep2.on("pointerover", () => {
      sep2.setAlpha(1).setDepth(1);
    });
    sep2.on("pointerout", () => {
      sep2.setAlpha(0.001);
    });
    sep2.on("pointerdown", () => {
      this.scene.sleep("Menu3");
      this.scene.run("var_Tuto");
    });

    this.add
      .text(750, 600, "Nombre: Arnone, Juan", {
        fontFamily: "font1",
        fontSize: "25px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
    this.add
      .text(750, 780, "Edad: 32", {
        fontFamily: "font1",
        fontSize: "25px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
    this.add
      .text(750, 660, "Grupo Sanguineo: A+", {
        fontFamily: "font1",
        fontSize: "25px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
    this.add
      .text(750, 720, "Altura: 1,84", {
        fontFamily: "font1",
        fontSize: "25px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    // -------------------------------------------------

    negro.on("pointerdown", () => {
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

    this.add.image(1400, 910, "boton");

    var saltar = this.add
      .image(1400, 910, "boton_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    var saltarT = this.add
      .text(saltar.x, saltar.y, "Saltar", {
        fontFamily: "font1",
        fontSize: "35px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    saltar.on("pointerdown", () => {
      score = 240;
      salv = 0;
      chat = 0;
      this.scene.sleep("clock");
      this.scene.start("sintomasPick");
      if (pacientes == 1) {
        pacientes = 2;
      }
    });

    saltar.on("pointerover", () => {
      saltar.setAlpha(1);
      saltarT.setTint(0xffffff);
    });
    saltar.on("pointerout", () => {
      saltar.setAlpha(0.01);
      saltarT.setTint(0x454545);
    });
  }
}
