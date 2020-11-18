class Tuto_01 extends Phaser.Scene {
  constructor() {
    super("juego");
  }
  create() {
    var Ficha = Phaser.Math.RND.pick(Idioma.tutorial.tuto_01.info.ficha);
    var Puerta = Phaser.Math.RND.pick(Idioma.tutorial.tuto_01.info.puerta);
    var Libreta = Phaser.Math.RND.pick(Idioma.tutorial.tuto_01.info.libreta);
    var Charlar = Phaser.Math.RND.pick(Idioma.tutorial.tuto_01.info.charlar);

    music2 = this.sound.add("menu_Game1");

    if (musica === 0) {
      music2.play(musicConfig);
    }

    var musicConfig2 = {
      mute: true,
    };

    var time10s = 0;

    this.time.addEvent({
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
    });

    this.add.image(960, 540, "consultorio").setScale(1.0);

    var back = this.add
      .image(0, 0, "infoB")
      .setOrigin(0, 1)
      .setAlpha(0.001)
      .setDepth(0.9);

    var info = this.add
      .text(0, 0, "", {
        fontSize: "40px",
        fontColor: "white",
        fontFamily: "font1",
      })
      .setOrigin(0, 1)
      .setDepth(1);

    this.input.on("pointermove", function (pointer) {
      if (pointer.x > 1520) {
        back.setOrigin(1);
        back.x = -10 + pointer.x;
        back.y = -5 + pointer.y;
        info.x = -210 + pointer.x;
        info.y = -13 + pointer.y;
      } else {
        back.setOrigin(0, 1);
        back.x = 10 + pointer.x;
        back.y = -5 + pointer.y;
        info.x = 30 + pointer.x;
        info.y = -13 + pointer.y;
      }
    });

    var ficha_c = this.add
      .image(400, 958, "ficha_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    ficha_c.on("pointerdown", () => {
      this.scene.pause();
      if (fichaVolver === 0) {
        this.scene.run("Menu3");
        this.scene.run("sepTuto");
      } else if (fichaVolver === 1) {
        this.scene.run("var_Tuto");
        this.scene.run("sepTuto");
      }
      pausa = 2;
      info.setText("");
      back.setAlpha(0.01);
      ficha_c.setAlpha(0.01);
    });
    ficha_c.on("pointerover", () => {
      info.setText(Ficha);
      back.setAlpha(1).setScale(0.9, 1);
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
      info.setText(Libreta);
      back.setAlpha(1).setScale(0.38, 1);
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
      info.setText(Puerta);
      back.setAlpha(1).setScale(0.75, 1);
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
      .image(784, 800, "paciente_01")
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" })
      .setOrigin(0, 1);

    pac_01.on("pointerdown", () => {
      info.setText("");
      back.setAlpha(0.01);
      ayu10 = 1;
      this.scene.pause();
      pausa = 2;
      this.scene.run("charla_01");
    });

    pac_01.on("pointerover", () => {
      info.setText(Charlar);
      back.setAlpha(1).setScale(0.45, 1);
    });
    pac_01.on("pointerout", () => {
      info.setText("");
      back.setAlpha(0.01);
    });
  }
}
