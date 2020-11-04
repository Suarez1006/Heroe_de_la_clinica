class pacMenu extends Phaser.Scene {
  constructor() {
    super("MenuP");
  }
  create() {
    selloPS = 0;
    selloPE = 0;
    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });
    this.add.image(750, 540, "ficha").setInteractive();

    sep1 = this.add
      .image(1124, 661, "separador_pac_s")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.45)
      .setAlpha(1);
    sep1.on("pointerover", () => {
      sep1.setAlpha(1);
    });



    sep2 = this.add
      .image(1124, 731, "separador_rub_s")
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
      sep1.setAlpha(0.01);
      sep3.setAlpha(0.01);
      sep4.setAlpha(0.01);
      this.scene.sleep("MenuP");
      this.scene.run("Menu3_01");
    });





    sep3 = this.add
      .image(1124, 800.9, "separador_var_s")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.45)
      .setAlpha(0.001);

    sep3.on("pointerover", () => {
      sep3.setAlpha(1).setDepth(1);
    });
    sep3.on("pointerout", () => {
      sep3.setAlpha(0.001);
    });
    sep3.on("pointerdown", () => {
      this.scene.sleep("MenuP");
      this.scene.run("Menu3_03");
    });





    sep4 = this.add
      .image(1124, 874, "separador_pap_s")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.45)
      .setAlpha(0.001);

    sep4.on("pointerover", () => {
      sep4.setAlpha(1).setDepth(1);
    });
    sep4.on("pointerout", () => {
      sep4.setAlpha(0.001);
    });
    sep4.on("pointerdown", () => {
      this.scene.sleep("MenuP");
      this.scene.run("Menu3_02");
    });






    this.add
      .text(750, 600, "Nombre: Rodriguez, Martín", {
        fontFamily: "font1",
        fontSize: "25px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
    this.add
      .text(750, 780, "Edad: 2O", {
        fontFamily: "font1",
        fontSize: "25px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
    this.add
      .text(750, 660, "Grupo Sanguineo: A-", {
        fontFamily: "font1",
        fontSize: "25px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
    this.add
      .text(750, 720, "Altura: 1,4O", {
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
  }
}
