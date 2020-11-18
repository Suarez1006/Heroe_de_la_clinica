class consultorioScene extends Phaser.Scene {
  constructor() {
    super("juego3");
  }
  create() {
    var Ficha = Phaser.Math.RND.pick(Idioma.juego.consultorioScene.ficha);
    var Puerta = Phaser.Math.RND.pick(Idioma.juego.consultorioScene.puerta);
    var Libreta = Phaser.Math.RND.pick(Idioma.juego.consultorioScene.libreta);
    var Charlar = Phaser.Math.RND.pick(Idioma.juego.consultorioScene.charlar);
    var Poster = Phaser.Math.RND.pick(Idioma.juego.consultorioScene.poster);

    var Rubeola = Phaser.Math.RND.pick(Idioma.menu.infoPoster.rubeola);
    var Varicela = Phaser.Math.RND.pick(Idioma.menu.infoPoster.varicela);
    var Paperas = Phaser.Math.RND.pick(Idioma.menu.infoPoster.paperas);

    music3 = this.sound.add("menu_Game1");

    var musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    };

    if (musica === 0) {
      music3.play(musicConfig);
    }

    var musicConfig4 = {
      mute: true,
    };

    this.add.image(960, 540, "consultorio").setScale(1.0);

    var back = this.add
      .image(10, 23, "infoB")
      .setOrigin(0, 1)
      .setAlpha(0.01)
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

      this.scene.run("MenuP");
      this.scene.restart("sepScene");
      this.scene.run("sepScene");
      pausa = 7;
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
      info.setText(Poster);
      back.setAlpha(1).setScale(1.05, 1);
    });
    fichasintomas.on("pointerout", () => {
      info.setText("");
      back.setAlpha(0.01);
    });

    this.add
      .text(1270, 169, Rubeola, {
        fontFamily: "font1",
        fontSize: "20px",
      })
      .setTint(0x868686);

    this.add
      .text(1200, 262, Varicela, {
        fontFamily: "font1",
        fontSize: "20px",
      })
      .setTint(0x868686);

    this.add
      .text(1270, 365, Paperas, {
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
      info.setText(Libreta);
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
      info.setText(Puerta);
      back.setAlpha(1).setScale(0.75, 1);
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
      .image(784, 800, "paciente_02")
      .setOrigin(0, 1)
      .setInteractive({ pixelPerfect: "true", cursor: "pointer" });

    var pac_03 = this.add
      .image(784, 800, "paciente_03")
      .setOrigin(0, 1)
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
      info.setText(Charlar);
      back.setAlpha(1).setScale(0.45, 1);
    });
    pac_gen.on("pointerout", () => {
      info.setText("");
      back.setAlpha(0.01);
    });
  }
}
