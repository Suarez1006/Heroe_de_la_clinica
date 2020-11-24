class rubMenu extends Phaser.Scene {
  constructor() {
    super("Menu3_01");
  }
  update() {
    if (resetFicha == 1) {
      this.scene.restart();
      resetFicha = 0;
    }
  }

  create() {
    selloPS = 0;
    selloPE = 0;

    var negro = this.add
      .image(960, 540, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });
    negro.on("pointerdown", () => {
      this.scene.sleep();
      this.scene.sleep("sepScene");
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
    var ficha = this.add.image(750, 540, "ficha").setInteractive();

    var sep1 = this.add
      .image(1123, 661, "separador_pac_s")
      .setScale(0.45)
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" })
      .setAlpha(0.001)
      .setDepth(1);
    sep1.on("pointerover", () => {
      sep1.setAlpha(1);
    });
    sep1.on("pointerout", () => {
      sep1.setAlpha(0.001);
    });
    sep1.on("pointerdown", () => {
      this.scene.sleep("Menu3_01");
      this.scene.run("MenuP");
      sep1.setAlpha(0.01);
      sep3.setAlpha(0.01);
      sep4.setAlpha(0.01);
    });

    var sep2 = this.add
      .image(1124, 732.5, "separador_rub_s")
      .setScale(0.45)
      .setAlpha(1)
      .setDepth(1);

    var sep3 = this.add
      .image(1124, 800.9, "separador_var_s")
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" })
      .setScale(0.45)
      .setAlpha(0.001)
      .setDepth(1);
    sep3.on("pointerover", () => {
      sep3.setAlpha(1);
    });
    sep3.on("pointerout", () => {
      sep3.setAlpha(0.001);
    });
    sep3.on("pointerdown", () => {
      this.scene.sleep("Menu3_01");
      this.scene.run("Menu3_03");
      sep1.setAlpha(0.01);
      sep3.setAlpha(0.01);
      sep4.setAlpha(0.01);
    });

    var sep4 = this.add
      .image(1124, 873, "separador_pap_s")
      .setInteractive({ cursor: "pointer", pixelPerfect: "true" })
      .setScale(0.45)
      .setAlpha(0.001)
      .setDepth(1);
    sep4.on("pointerover", () => {
      sep4.setAlpha(1);
    });
    sep4.on("pointerout", () => {
      sep4.setAlpha(0.001);
    });
    sep4.on("pointerdown", () => {
      this.scene.sleep("Menu3_01");
      this.scene.run("Menu3_02");
      sep1.setAlpha(0.01);
      sep3.setAlpha(0.01);
      sep4.setAlpha(0.01);
    });

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
      this.scene.run("infoEnfermedad");
      this.scene.sleep();
      this.scene.sleep("sepScene");
      infoE = 1;
    });

    this.add
      .text(440, 140, "Rubéola", {
        fontFamily: "font1",
        fontSize: "75px",
      })
      .setTint(0x454545);

    this.add
      .text(420, 325, "Fiebre", {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(420, 375, "Dolor de Cabeza", {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(420, 425, "Congestión", {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    this.add
      .text(420, 475, "Inflamación de ojos", {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(420, 525, "Ganglios inflamados", {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(420, 575, "Erupción en la piel", {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(420, 625, "Dolor de articulaciones", {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);
    this.add
      .text(420, 675, "Faringitis", {
        fontFamily: "font1",
        fontSize: "40px",
      })
      .setTint(0x454545)
      .setOrigin(0, 0.5);

    var textoSi = this.add
      .text(900, 260, "Sí", {
        fontFamily: "font1",
        fontSize: "50px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    var textoNo = this.add
      .text(1020, 260, "No", {
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
    var siP5 = this.add
      .image(textoSi.x, 530, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var siP6 = this.add
      .image(textoSi.x, 580, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var siP7 = this.add
      .image(textoSi.x, 630, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var siP8 = this.add
      .image(textoSi.x, 680, "casilla")
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
    var noP5 = this.add
      .image(textoNo.x, siP5.y, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var noP6 = this.add
      .image(textoNo.x, siP6.y, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var noP7 = this.add
      .image(textoNo.x, siP7.y, "casilla")
      .setInteractive({ cursor: "pointer" })
      .setScale(0.65);
    var noP8 = this.add
      .image(textoNo.x, siP8.y, "casilla")
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

    var circulo9 = this.add
      .image(siP5.x, siP5.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo10 = this.add
      .image(noP5.x, noP5.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo11 = this.add
      .image(siP6.x, siP6.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo12 = this.add
      .image(noP6.x, noP6.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo13 = this.add
      .image(siP7.x, siP7.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo14 = this.add
      .image(noP7.x, noP7.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo15 = this.add
      .image(siP8.x, siP8.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);
    var circulo16 = this.add
      .image(noP8.x, noP8.y, "tilde")
      .setAlpha(0.01)
      .setScale(0.75);

    var circuloA = 0;
    var circuloA2 = 0;
    var circuloA3 = 0;
    var circuloA4 = 0;
    var circuloA5 = 0;
    var circuloA6 = 0;
    var circuloA7 = 0;
    var circuloA8 = 0;

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

    siP5.on("pointerdown", () => {
      circuloA5 = 1;
      if (circuloA5 === 1) {
        circulo9.setAlpha(0.6);
        circulo10.setAlpha(0.01);
        finish = 1;
      }
    });
    noP5.on("pointerdown", () => {
      circuloA5 = 2;
      if (circuloA5 === 2) {
        circulo10.setAlpha(0.6);
        circulo9.setAlpha(0.01);
        finish = 1;
      }
    });
    siP6.on("pointerdown", () => {
      circuloA6 = 1;
      if (circuloA6 === 1) {
        circulo11.setAlpha(0.6);
        circulo12.setAlpha(0.01);
        finish = 1;
      }
    });
    noP6.on("pointerdown", () => {
      circuloA6 = 2;
      if (circuloA6 === 2) {
        circulo12.setAlpha(0.6);
        circulo11.setAlpha(0.01);
        finish = 1;
      }
    });
    siP7.on("pointerdown", () => {
      circuloA7 = 1;
      if (circuloA7 === 1) {
        circulo13.setAlpha(0.6);
        circulo14.setAlpha(0.01);
        finish = 1;
      }
    });
    noP7.on("pointerdown", () => {
      circuloA7 = 2;
      if (circuloA7 === 2) {
        circulo14.setAlpha(0.6);
        circulo13.setAlpha(0.01);
        finish = 1;
      }
    });
    siP8.on("pointerdown", () => {
      circuloA8 = 1;
      if (circuloA8 === 1) {
        circulo15.setAlpha(0.6);
        circulo16.setAlpha(0.01);
        finish = 1;
      }
    });
    noP8.on("pointerdown", () => {
      circuloA8 = 2;
      if (circuloA8 === 2) {
        circulo16.setAlpha(0.6);
        circulo15.setAlpha(0.01);
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
      .text(750, 750, "Estado", {
        fontFamily: "font1",
        fontSize: "70px",
      })
      .setTint(0x454545)
      .setOrigin(0.5);

    var selloPuesto = this.add
      .text(750, 870, "", {
        fontFamily: "font1",
        fontSize: "40px",
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
      .text(flecha.x, flecha.y, "", {
        fontFamily: "font1",
        fontSize: "35px",
      })
      .setTint(0x454545)
      .setOrigin(0.5)
      .setDepth(1);

    flecha.on("pointerdown", () => {
      score = 240;
      salv = 0;
      chat = 0;
      this.scene.sleep("clock");
      if (pacientes == 1) {
        pacientes = 2;
      }
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
      this.scene.pause("clock");
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
          FlechaT.setText("Terminar");
          selloPuesto.setText("Sano").setTint(0x00ff00);
        }
      } else if (selloPE == 1) {
        if (finish == 1) {
          selloPE = 2;
          enfermoSello.setAlpha(1);
          finish = 2;
          flecha.setAlpha(1);
          salv += 1;
          score += 600;
          FlechaT.setText("Terminar");
          selloPuesto.setText("Enfermo").setTint(0xff0000);
        }
      }
    });
  }
}
