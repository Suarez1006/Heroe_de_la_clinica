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
    music = this.sound.add("menu_Musica");

    if (muteado == 0) {
      if (musicaS == 0) {
        music.play(musicConfig);
      }
    }

    var Jugar = Phaser.Math.RND.pick(Idioma.menu.mainMenu.jugar);
    var Ayuda = Phaser.Math.RND.pick(Idioma.menu.mainMenu.ayuda);
    var Creditos = Phaser.Math.RND.pick(Idioma.menu.mainMenu.creditos);

    var full = 0;

    this.add.image(960, 540, "inicio");

    IdiomaGen.on("pointerdown", () => {
      if (selecIdioma == "es") {
        selecIdioma = "en";
        IdiomaGen.setTexture("botonEN");
        musicaS = 1;
        this.scene.restart();
      } else if (selecIdioma == "en") {
        selecIdioma = "pt";
        IdiomaGen.setTexture("botonEN");
        musicaS = 1;
        this.scene.restart();
      } else if (selecIdioma == "pt") {
        selecIdioma = "es";
        IdiomaGen.setTexture("botonEN");
        musicaS = 1;
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

    this.add
      .image(100, 994, "boton_fscreen")
      .setInteractive({ cursor: "pointer", pixelPerfect: true });
    var fScreen = this.add
      .image(100, 994, "boton_fscreen_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer", pixelPerfect: true });

    this.add
      .image(100, 994, "boton_wscreen")
      .setInteractive({ cursor: "pointer", pixelPerfect: true });
    var wScreen = this.add.image(100, 994, "boton_wscreen_s").setAlpha(0.01);

    this.add.image(1850, 200, "boton_musica");
    var botonMusic = this.add
      .image(1850, 200, "boton_musica_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });
    var muteMusic = this.add.image(1850, 200, "mute").setAlpha(0.01);

    play.on("pointerdown", () => {
      this.scene.start("juego");
      this.scene.start("clock");
      if (muteado == 0) {
        music.play(musicConfig2);
      }
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
    fScreen.on("pointerdown", () => {
      if (full == 0) {
        this.scale.startFullscreen();
        full = 1;
        wScreen.setAlpha(1);
        fScreen.setAlpha(0.01);
      }
    });
    fScreen.on("pointerover", () => {
      fScreen.setAlpha(1);
    });
    fScreen.on("pointerout", () => {
      fScreen.setAlpha(0.01);
    });
    botonMusic.on("pointerdown", () => {
      if (muteado == 0) {
        music.stop();
        muteado = 1;
        muteMusic.setAlpha(1);
      } else {
        music.play();
        muteado = 0;
        muteMusic.setAlpha(0.01);
      }
    });
    botonMusic.on("pointerover", () => {
      botonMusic.setAlpha(1);
    });
    botonMusic.on("pointerout", () => {
      botonMusic.setAlpha(0.01);
    });
  }
}
