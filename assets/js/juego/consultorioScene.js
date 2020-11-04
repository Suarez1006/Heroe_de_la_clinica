class consultorioScene extends Phaser.Scene {
  constructor() {
    super("juego3");
  }
  create() {
    this.add.image(960, 540, "consultorio").setScale(1.0);

    var back = this.add
      .image(10, 23, "infoB")
      .setOrigin(0, 1)
      .setAlpha(0.01)
      .setDepth(0.9);

    var info = this.add
      .text(18, 30, "", {
        fontSize: "20px",
        fontColor: "white",
        fontFamily: "font1",
      })
      .setOrigin(0, 1)
      .setDepth(1);

    this.input.on("pointermove", function (pointer) {
      if (pointer.x > 1520) {
        back.x = -370 + pointer.x;
        back.y = -10 + pointer.y;
        info.x = -340 + pointer.x;
        info.y = -21 + pointer.y;
      } else {
        back.x = 10 + pointer.x;
        back.y = -5 + pointer.y;
        info.x = 30 + pointer.x;
        info.y = -18 + pointer.y;
      }
    });

    var ficha_c = this.add
      .image(400, 958, "ficha_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    ficha_c.on("pointerdown", () => {
      this.scene.pause();
      this.scene.run("MenuP");
      pausa = 7;
      info.setText("");
      back.setAlpha(0.01);
      ficha_c.setAlpha(0.01);
    });
    ficha_c.on("pointerover", () => {
      info.setText("Ficha de paciente");
      back.setAlpha(1).setScale(1.3, 1);
      ficha_c.setAlpha(1);
    });
    ficha_c.on("pointerout", () => {
      info.setText("");
      back.setAlpha(0.01);
      ficha_c.setAlpha(0.01);
    });

    var fichasintomas = this.add
      .image(1153, 153, "hitbox")
      .setScale(1.7, 0.75)
      .setOrigin(0)
      .setInteractive({ cursor: "pointer" })
      .setAlpha(0.001);

    fichasintomas.on("pointerdown", () => {
      this.scene.pause("juego3");
      this.scene.run("postersintomas");
      info.setText("");
      back.setAlpha(0.01);
    });

    fichasintomas.on("pointerover", () => {
      info.setText("Info enfermedades");
      back.setAlpha(1).setScale(1.3, 1);
    });
    fichasintomas.on("pointerout", () => {
      info.setText("");
      back.setAlpha(0.01);
    });

    this.add
      .text(1270, 169, "Rubeola", {
        fontFamily: "font1",
        fontSize: "20px",
      })
      .setTint(0x868686);

    this.add
      .text(1200, 262, "Varicela", {
        fontFamily: "font1",
        fontSize: "20px",
      })
      .setTint(0x868686);

    this.add
      .text(1270, 365, "Paperas", {
        fontFamily: "font1",
        fontSize: "20px",
      })
      .setTint(0x868686);

    var libreta = this.add
      .image(134, 962, "libreta_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    libreta.on("pointerdown", () => {
      this.scene.pause();
      this.scene.pause("clock");
      this.scene.run("Menu2");
      pausa = 7;
      info.setText("");
      back.setAlpha(0.01);
      libreta.setAlpha(0.01);
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

    this.add.image(860, 900, "bowl").setOrigin(0.5, 0).setScale(1.2);

    var puerta = this.add
      .image(1528, 140, "puerta_1")
      .setOrigin(0)
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    puerta.on("pointerover", () => {
      puerta.setAlpha(1);
      info.setText("Ir a la camilla");
      back.setAlpha(1).setScale(1.25, 1);
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
      .image(955, 565, "paciente_02")
      .setScale(1.5, 1.7)
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
