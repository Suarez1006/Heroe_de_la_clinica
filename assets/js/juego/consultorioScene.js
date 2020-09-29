class consultorioScene extends Phaser.Scene {
  constructor() {
    super("juego3");
  }
  create() {
    this.add.image(551, 310, "consultorio").setScale(1.0);

    var back = this.add
      .image(10, 23, "infoB")
      .setOrigin(0, 1)
      .setAlpha(0.01)
      .setDepth(0.9);

    var info = this.add
      .text(18, 30, "", {
        fontSize: "12px",
        fontColor: "white",
        fontFamily: "font1",
      })
      .setOrigin(0, 1)
      .setDepth(1);

    this.input.on("pointermove", function (pointer) {
      if (pointer.x > 920) {
        back.x = -200 + pointer.x;
        back.y = -10 + pointer.y;
        info.x = -195 + pointer.x;
        info.y = -14 + pointer.y;
      } else {
        back.x = 20 + pointer.x;
        back.y = -10 + pointer.y;
        info.x = 25 + pointer.x;
        info.y = -14 + pointer.y;
      }
    });

    var ficha_c = this.add
      .image(246, 484, "ficha_s")
      .setOrigin(0, 0)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    ficha_c.on("pointerdown", () => {
      this.scene.pause();
      this.scene.run("Menu3_01");
      pausa = 7;
    });
    ficha_c.on("pointerover", () => {
      info.setText("Ficha de paciente");
      back.setAlpha(1).setScale(1.5, 1);
      ficha_c.setAlpha(1);
    });
    ficha_c.on("pointerout", () => {
      info.setText("");
      back.setAlpha(0.01);
      ficha_c.setAlpha(0.01);
    });

    var fichasintomas = this.add
      .image(815, 185, "hitbox")
      .setScale(0.7, 0.33)
      .setInteractive({ cursor: "pointer" })
      .setAlpha(0.01);

    fichasintomas.on("pointerdown", () => {
      this.scene.pause("juego3");
      this.scene.run("postersintomas");
    });

    var libreta = this.add
      .image(78, 484, "libreta_s")
      .setOrigin(0, 0)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    libreta.on("pointerdown", () => {
      this.scene.pause();
      this.scene.pause("clock");
      this.scene.run("Menu2");
      pausa = 7;
    });
    libreta.on("pointerover", () => {
      libreta.setAlpha(1);
      info.setText("Menu");
      back.setAlpha(1).setScale(0.45, 1);
    });
    libreta.on("pointerout", () => {
      libreta.setAlpha(0.03);
      info.setText("");
      back.setAlpha(0.01);
    });

    this.add.image(600, 500, "bowl").setOrigin(0.5, 0);

    var puerta = this.add
      .image(920, 93, "puerta")
      .setOrigin(0, 0)
      .setAlpha(0.01)
      .setScale(0.575, 0.565)
      .setInteractive({ cursor: "pointer" });

    puerta.on("pointerover", () => {
      puerta.setAlpha(1);
      info.setText("Ir a la camilla");
      back.setAlpha(1).setScale(1.35, 1);
    });

    puerta.on("pointerdown", () => {
      pausa = 8;
      this.scene.sleep();
      this.scene.start("juego4");
    });

    puerta.on("pointerout", () => {
      puerta.setAlpha(0.01);
      info.setText("");
      back.setAlpha(0.01);
    });

    var pac_02 = this.add
      .image(405.6, 360, "paciente_02")
      .setScale(0.9, 1)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" });

    var pac_03 = this.add
      .image(390, 350, "paciente_03")
      .setScale(0.868, 0.83)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" })
      .setAlpha(0);

    pac_gen = pac_02;
    if (pacientes == 2) {
      pac_03.setAlpha(1);
      pac_02.setAlpha(0);
      pac_gen = pac_03;
    }

    pac_gen.on("pointerdown", () => {
      info.setText("");
      back.setAlpha(0.01);
      pausa = 7;
      this.scene.pause();
      this.scene.run("charla_01");
    });

    pac_gen.on("pointerover", () => {
      info.setText("Charlar");
      back.setAlpha(1).setScale(0.7, 1);
    });
    pac_gen.on("pointerout", () => {
      info.setText("");
      back.setAlpha(0.01);
    });
  }
}
