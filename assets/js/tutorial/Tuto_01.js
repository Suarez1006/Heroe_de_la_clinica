class Tuto_01 extends Phaser.Scene {
  constructor() {
    super("juego");
  }
  create() {
    var time10s = 0;

    /*this.time.addEvent({
      delay: 1000,
      callback: function () {
        if (ayu10 == 0) {
          time10s++;

          if (time10s == 10) {
            this.scene.pause();
            this.scene.run("help10s");
            ayu10 = 1;
          }
        }
      },
      callbackScope: this,
      loop: true,
    });*/

    this.add.image(960, 540, "consultorio").setScale(1.0);

    var back = this.add
      .image(10, 50, "infoB")
      .setOrigin(0, 1)
      .setAlpha(0.001)
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
      this.scene.run("Menu3");
      pausa = 2;
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

    var libreta = this.add
      .image(134, 962, "libreta_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    libreta.on("pointerdown", () => {
      this.scene.pause();
      this.scene.pause("clock");
      this.scene.run("Menu2");
      pausa = 2;
      info.setText("");
      back.setAlpha(0.01);
      libreta.setAlpha(0.01);
    });
    libreta.on("pointerover", () => {
      libreta.setAlpha(1);
      info.setText("Menu");
      back.setAlpha(1).setScale(0.42, 1);
    });
    libreta.on("pointerout", () => {
      libreta.setAlpha(0.01);
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
      this.scene.sleep();
      this.scene.start("juego2");
    });

    puerta.on("pointerout", () => {
      puerta.setAlpha(0.01);
      info.setText("");
      back.setAlpha(0.01);
    });

    var pac_01 = this.add
      .image(955, 549, "paciente_01")
      .setScale(1.6, 1.62)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" });

    pac_01.on("pointerdown", () => {
      info.setText("");
      back.setAlpha(0.01);
      ayu10 = 1;
      this.scene.pause();
      pausa = 2;
      this.scene.run("charla_01");
    });

    pac_01.on("pointerover", () => {
      info.setText("Charlar");
      back.setAlpha(1).setScale(0.6, 1);
    });
    pac_01.on("pointerout", () => {
      info.setText("");
      back.setAlpha(0.01);
    });
  }
}
