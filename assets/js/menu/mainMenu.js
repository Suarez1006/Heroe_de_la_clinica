class mainMenu extends Phaser.Scene {
  constructor() {
    super("Menu");
  }
  //update() {
  //  if (selecIdioma == "es") {
  //    Idioma = this.game.cache.json.get("es_ES");
  //  } else if (selecIdioma == "en") {
  //    Idioma = this.game.cache.json.get("en_EN");
  //  }
  //}

  create() {
    if (selecIdioma == "es") {
      Idioma = this.game.cache.json.get("es_ES");
      var IdiomaGen = this.add
        .image(1850, 75, "botonES")
        .setDepth(1)
        .setInteractive({ cursor: "pointer", pixelPerfect: true });
    } else if (selecIdioma == "en") {
      var IdiomaGen = this.add
        .image(1850, 75, "botonEN")
        .setDepth(1)
        .setInteractive({ cursor: "pointer", pixelPerfect: true });
      Idioma = this.game.cache.json.get("en_EN");
    } else if (selecIdioma == "pt") {
      var IdiomaGen = this.add
        .image(1850, 75, "botonPT")
        .setDepth(1)
        .setInteractive({ cursor: "pointer", pixelPerfect: true });
      Idioma = this.game.cache.json.get("pt_PT");
    }
    this.music = this.sound.add("menu_Musica");

    var musicConfig = {
      mute: false,
      volume: 1,
      rate: 1,
      detune: 0,
      seek: 0,
      loop: true,
      delay: 0,
    };
    this.music.play(musicConfig);

    var musicConfig2 = {
      mute: true,
    };

    var Jugar = Phaser.Math.RND.pick(Idioma.menu.mainMenu.jugar);
    var Ayuda = Phaser.Math.RND.pick(Idioma.menu.mainMenu.ayuda);
    var Creditos = Phaser.Math.RND.pick(Idioma.menu.mainMenu.creditos);

    this.add.image(960, 540, "inicio");

    IdiomaGen.on("pointerdown", () => {
      if (selecIdioma == "es") {
        selecIdioma = "en";
        IdiomaGen.setTexture("botonEN");
        this.scene.restart();
      } else if (selecIdioma == "en") {
        selecIdioma = "pt";
        IdiomaGen.setTexture("botonEN");
        this.scene.restart();
      } else if (selecIdioma == "pt") {
        selecIdioma = "es";
        IdiomaGen.setTexture("botonEN");
        this.scene.restart();
      }
    });

    var play = this.add
      .image(960, 954, "boton_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var playT = this.add
      .text(960, 949, Jugar, {
        fontFamily: "font1",
        fontSize: "60px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    var credits = this.add
      .image(1524, 994, "boton_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var creditsT = this.add
      .text(1524, 989, Creditos, {
        fontFamily: "font1",
        fontSize: "60px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
    var ayuda = this.add
      .image(396, 994, "boton_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    var ayudaT = this.add
      .text(396, 989, Ayuda, {
        fontFamily: "font1",
        fontSize: "60px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);
    play.on("pointerdown", () => {
      this.scene.start("juego");
      this.scene.start("clock");
      this.music.play(musicConfig2);
    });

    play.on("pointerover", () => {
      play.setAlpha(1);
      playT.setTint(0xefefef);
    });
    play.on("pointerout", () => {
      play.setAlpha(0.01);
      playT.setTint(0x454545);
    });

    credits.on("pointerdown", () => {
      this.scene.start("creditos");
    });
    credits.on("pointerover", () => {
      credits.setAlpha(1);
      creditsT.setTint(0xefefef);
    });
    credits.on("pointerout", () => {
      credits.setAlpha(0.01);
      creditsT.setTint(0x454545);
    });

    ayuda.on("pointerdown", () => {
      pausa = 1;
      this.scene.run("ayuda_1");
      ayuda.setAlpha(0.01);
      ayudaT.setTint(0x454545);
    });
    ayuda.on("pointerover", () => {
      ayuda.setAlpha(1);
      ayudaT.setTint(0xefefef);
    });
    ayuda.on("pointerout", () => {
      ayuda.setAlpha(0.01);
      ayudaT.setTint(0x454545);
    });
  }
}
