class Scene7 extends Phaser.Scene {
  constructor() {
    super("juego3");
  }
  create() {
    this.add.image(551, 310, "consultorio").setScale(1.0);

    var back = this.add.image(10, 23, "infoB").setOrigin(0, 0).setAlpha(0.01);

    var info = this.add.text(18, 30, "", {
      fontSize: "12px",
      fontColor: "white",
      fontFamily: "font1",
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
      this.scene.sleep();
      this.scene.start("juego4");
    });

    puerta.on("pointerout", () => {
      puerta.setAlpha(0.01);
      info.setText("");
      back.setAlpha(0.01);
    });

    var pac_02 = this.add
      .image(405.6, 342, "paciente_02")
      .setScale(1.1, 1.12)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" });

    pac_02.on("pointerdown", () => {
      if (pausa == 2) {
        this.scene.restart("charla_01");
      }
      this.scene.pause();
      pausa = 7;
      content = ["Ahora digo esto gg, soy otro"];
      this.scene.run("charla_01");
    });

    pac_02.on("pointerover", () => {
      info.setText("Charlar");
      back.setAlpha(1).setScale(0.7, 1);
    });
    pac_02.on("pointerout", () => {
      info.setText("");
      back.setAlpha(0.01);
    });
  }
}
