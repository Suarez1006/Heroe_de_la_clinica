class varTuto extends Phaser.Scene {
  constructor() {
    super("var_Tuto");
  }
  create() {
    var Varicela = Phaser.Math.RND.pick(Idioma.tutorial.varTuto.varicela);
    var Fiebre = Phaser.Math.RND.pick(Idioma.fichas.fiebre);
    var DolorCabeza = Phaser.Math.RND.pick(Idioma.fichas.dolorCabeza);
    var PerApetito = Phaser.Math.RND.pick(Idioma.tutorial.varTuto.perApetito);
    var Cansancio = Phaser.Math.RND.pick(Idioma.tutorial.varTuto.cansancio);
    var Sano = Phaser.Math.RND.pick(Idioma.fichas.sano);
    var Estado = Phaser.Math.RND.pick(Idioma.fichas.estado);
    var Terminar = Phaser.Math.RND.pick(Idioma.fichas.terminar);
    var Enfermo = Phaser.Math.RND.pick(Idioma.fichas.enfermo);
    var fichaSi = Phaser.Math.RND.pick(Idioma.fichas.si);
    var fichaNo = Phaser.Math.RND.pick(Idioma.fichas.no);

    var sep1;
    var sep2;

    selloPS = 0;
    selloPE = 0;
    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });
    negro.on("pointerdown", () => {
      this.scene.sleep();
      reseteo = 1;
      this.scene.stop("sepTuto");
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
    var ficha = this.add.image(750, 540, "fichaTuto").setInteractive();

    sep1 = this.add
      .image(1124, 732.5, "separador_pac_s")
      .setScale(0.45)
      .setAlpha(0.001)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" });

    sep1.on("pointerover", () => {
      sep1.setAlpha(1);
    });
    sep1.on("pointerout", () => {
      sep1.setAlpha(0.001);
    });
    sep1.on("pointerdown", () => {
      sep1.setAlpha(0.001);
      this.scene.sleep("var_Tuto");
      this.scene.run("Menu3");
      fichaVolver = 0;
    });

    this.add
      .image(1123, 800.9, "separador_var_s")
      .setScale(0.45)
      .setAlpha(1)
      .setDepth(1);

    boton_ayuda = this.add
      .image(1010, 185, "boton_ayuda")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.6);
    boton_ayuda_s = this.add
      .image(boton_ayuda.x, boton_ayuda.y, "boton_ayuda_s")
      .setAlpha(0.001)
      .setScale(0.6);

    boton_ayuda.on("pointerover", () => {
      boton_ayuda_s.setAlpha(1);
    });
    boton_ayuda.on("pointerout", () => {
      boton_ayuda_s.setAlpha(0.001);
    });
    boton_ayuda.on("pointerdown", () => {
      this.scene.start("infoEnfermedad");
      this.scene.stop();
      infoE = 4;
    });

    this.add
      .text(440, 140, Varicela, {
        fontFamily: "font1",
        fontSize: "75px",
      })
      .setTint(0x454545);

    this.add
      .text(420, 325, Fiebre, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(420, 375, DolorCabeza, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(420, 425, PerApetito, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(420, 475, Cansancio, {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    var textoSi = this.add
      .text(900, 260, fichaSi, {
        fontFamily: "font1",
        fontSize: "50px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    var textoNo = this.add
      .text(1020, 260, fichaNo, {
        fontFamily: "font1",
        fontSize: "50px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    var siP = this.add
      .image(textoSi.x, 330, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var siP2 = this.add
      .image(textoSi.x, 380, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var siP3 = this.add
      .image(textoSi.x, 430, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var siP4 = this.add
      .image(textoSi.x, 480, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);

    var noP = this.add
      .image(textoNo.x, siP.y, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var noP2 = this.add
      .image(textoNo.x, siP2.y, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var noP3 = this.add
      .image(textoNo.x, siP3.y, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var noP4 = this.add
      .image(textoNo.x, siP4.y, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);

    // -----------------------------------------
    var circulo = this.add
      .image(siP.x, siP.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo2 = this.add
      .image(noP.x, noP.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo3 = this.add
      .image(siP2.x, siP2.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo4 = this.add
      .image(noP2.x, noP2.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo5 = this.add
      .image(siP3.x, siP3.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo6 = this.add
      .image(noP3.x, noP3.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo7 = this.add
      .image(siP4.x, siP4.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo8 = this.add
      .image(noP4.x, noP4.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);

    var circuloA = 0;
    var circuloA2 = 0;
    var circuloA3 = 0;
    var circuloA4 = 0;

    siP.on("pointerdown", () => {
      circuloA = 1;
      if (circuloA === 1) {
        circulo.setAlpha(0.6);
        circulo2.setAlpha(0.01);
        finish = 1;
      }
    });
    noP.on("pointerdown", () => {
      circuloA = 2;
      if (circuloA === 2) {
        circulo2.setAlpha(0.6);
        circulo.setAlpha(0.01);
        finish = 1;
      }
    });
    siP2.on("pointerdown", () => {
      circuloA2 = 1;
      if (circuloA2 === 1) {
        circulo3.setAlpha(0.6);
        circulo4.setAlpha(0.01);
        finish = 1;
      }
    });
    noP2.on("pointerdown", () => {
      circuloA2 = 2;
      if (circuloA2 === 2) {
        circulo4.setAlpha(0.6);
        circulo3.setAlpha(0.01);
        finish = 1;
      }
    });
    siP3.on("pointerdown", () => {
      circuloA3 = 1;
      if (circuloA3 === 1) {
        circulo5.setAlpha(0.6);
        circulo6.setAlpha(0.01);
        finish = 1;
      }
    });
    noP3.on("pointerdown", () => {
      circuloA3 = 2;
      if (circuloA3 === 2) {
        circulo6.setAlpha(0.6);
        circulo5.setAlpha(0.01);
        finish = 1;
      }
    });
    siP4.on("pointerdown", () => {
      circuloA4 = 1;
      if (circuloA4 === 1) {
        circulo7.setAlpha(0.6);
        circulo8.setAlpha(0.01);
        finish = 1;
      }
    });
    noP4.on("pointerdown", () => {
      circuloA4 = 2;
      if (circuloA4 === 2) {
        circulo8.setAlpha(0.6);
        circulo7.setAlpha(0.01);
        finish = 1;
      }
    });

    var enfermoSello = this.add
      .image(750, 870, "enfermo")
      .setAlpha(0.001)
      .setOrigin(0.5);

    this.add.image(1400, 400, "selloD");
    var selloE = this.add
      .image(1400, 400, "selloD_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    selloE.on("pointerdown", () => {
      if (selloPE == 0) {
        selloPE = 1;
        selloPS = 0;
        selloS.clearTint();
        selloS.setAlpha(0.01);
        selloE.setTint(0xff0000);
      } else if (selloPE == 1) {
        selloPE = 0;
        selloE.clearTint();
        selloE.setAlpha(0.01);
      }
    });
    selloE.on("pointerover", () => {
      if (selloPE == 0) {
        selloE.setAlpha(1);
      }
    });
    selloE.on("pointerout", () => {
      if (selloPE === 0) {
        selloE.setAlpha(0.01);
      }
    });

    this.add.image(1400, 200, "selloA").setInteractive({ cursor: "pointer" });
    var selloS = this.add
      .image(1400, 200, "selloA_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    var sanoSello = this.add
      .image(750, 870, "sano")
      .setAlpha(0.001)
      .setOrigin(0.5);

    this.add.image(750, 870, "fondo_sello").setOrigin(0.5);

    this.add
      .text(750, 750, Estado, {
        fontFamily: "font1",
        fontSize: "70px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    var selloPuesto = this.add
      .text(750, 865, "", {
        fontFamily: "font1",
        fontSize: "50px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    selloS.on("pointerdown", () => {
      if (selloPS == 0) {
        selloPS = 1;
        selloPE = 0;
        selloE.clearTint();
        selloE.setAlpha(0.01);
        selloS.setTint(0x00ff00);
      } else if (selloPS == 1) {
        selloPS = 0;
        selloS.clearTint();
        selloS.setAlpha(0.01);
      }
    });
    selloS.on("pointerover", () => {
      if (selloPS == 0) {
        selloS.setAlpha(1);
      }
    });
    selloS.on("pointerout", () => {
      if (selloPS === 0) {
        selloS.setAlpha(0.01);
      }
    });

    var flecha = this.add
      .image(1400, 580, "boton")
      .setAlpha(0)
      .setInteractive({ cursor: "pointer" });

    var flechaS = this.add.image(1400, 580, "boton_s").setAlpha(0.001);

    var FlechaT = this.add
      .text(flecha.x, flecha.y - 5, "", {
        fontFamily: "font1",
        fontSize: "45px",
      })
      .setTint(0x454545)
      .setOrigin(0.5)
      .setDepth(1);

    flecha.on("pointerdown", () => {
      chat = 0;
      this.scene.sleep("clock");
    });

    flecha.on("pointerover", () => {
      flechaS.setAlpha(1);
      FlechaT.setTint(0xffffff);
    });
    flecha.on("pointerout", () => {
      flechaS.setAlpha(0.01);
      FlechaT.setTint(0x454545);
    });

    flecha.on("pointerdown", () => {
      this.scene.sleep("clock");
      this.scene.stop("sepTuto");
      chat = 0;
      if (circuloA == 1) {
        score += 40;
      }
      if (circuloA2 == 1) {
        score += 40;
      }
      if (circuloA3 == 1) {
        score += 40;
      }
      if (circuloA4 == 1) {
        score += 40;
      }

      if (selloPE == 2) {
        this.scene.pause();
        this.scene.start("score_E");
      } else if (selloPS == 2) {
        this.scene.pause();
        this.scene.start("score_F");
      }
    });

    ficha.on("pointerdown", () => {
      if (selloPS === 1) {
        if (finish == 1) {
          selloPS = 2;
          sanoSello.setAlpha(1);
          finish = 2;
          flecha.setAlpha(1);
          FlechaT.setText(Terminar);
          selloPuesto.setText(Sano).setTint(0x42bd41);
        }
      } else if (selloPE == 1) {
        if (finish == 1) {
          selloPE = 2;
          enfermoSello.setAlpha(1);
          finish = 2;
          flecha.setAlpha(1);
          salv += 1;
          score += 600;
          FlechaT.setText(Terminar);
          selloPuesto.setText(Enfermo).setTint(0xff0000);
        }
      }
    });
  }
}
