class SceneB_2 extends Phaser.Scene {
  constructor() {
    super("Menu3_02");
  }
  update() {
    if (resetFichaA == 1) {
      this.scene.restart();
      resetFichaA = 0;
    }
  }

  create() {
    var repeF = 0;
    var repeC = 0;
    var repeG = 0;
    var repeP = 0;

    selloPE = 0;
    selloPS = 0;
    var sellado = 0;

    var negro = this.add
      .image(551, 310, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });
    var ficha2a = this.add
      .image(481, 310, "ficha2a")
      .setScale(0.99)
      .setInteractive();
    var ficha = ficha2a;
    var ficha3a = this.add
      .image(481, 310, "ficha3a")
      .setScale(0.99)
      .setInteractive()
      .setAlpha(0);
    if (pacientes == 2) {
      ficha = ficha3a;
      ficha3a.setAlpha(1);
      ficha2a.setAlpha(0);
    }

    var flechaN = this.add
      .image(710, 520, "flechaP")
      .setInteractive({ cursor: "pointer" })
      .setAlpha(0.75);

    flechaN.on("pointerdown", () => {
      this.scene.run("Menu3_03");
      this.scene.sleep();
    });
    var flechaB = this.add
      .image(270, 520, "flechaP")
      .setInteractive({ cursor: "pointer" })
      .setAlpha(0.75)
      .setFlip(true);

    flechaB.on("pointerdown", () => {
      this.scene.run("Menu3_01");
      this.scene.sleep();
    });

    var siP = this.add
      .image(620, 293, "siP")
      .setInteractive({ cursor: "pointer" });
    var siP2 = this.add
      .image(620, 320.5, "siP")
      .setInteractive({ cursor: "pointer" });
    var siP3 = this.add
      .image(620, 348, "siP")
      .setInteractive({ cursor: "pointer" });
    var siP4 = this.add
      .image(620, 375.5, "siP")
      .setInteractive({ cursor: "pointer" });
    var siP5 = this.add
      .image(620, 403, "siP")
      .setInteractive({ cursor: "pointer" });
    var siP6 = this.add
      .image(620, 430.5, "siP")
      .setInteractive({ cursor: "pointer" });
    var siP7 = this.add
      .image(620, 458, "siP")
      .setInteractive({ cursor: "pointer" });

    var noP = this.add
      .image(680, 293, "noP")
      .setInteractive({ cursor: "pointer" });
    var noP2 = this.add
      .image(680, 320.5, "noP")
      .setInteractive({ cursor: "pointer" });
    var noP3 = this.add
      .image(680, 348, "noP")
      .setInteractive({ cursor: "pointer" });
    var noP4 = this.add
      .image(680, 375.5, "noP")
      .setInteractive({ cursor: "pointer" });
    var noP5 = this.add
      .image(680, 403, "noP")
      .setInteractive({ cursor: "pointer" });
    var noP6 = this.add
      .image(680, 430.5, "noP")
      .setInteractive({ cursor: "pointer" });
    var noP7 = this.add
      .image(680, 458, "noP")
      .setInteractive({ cursor: "pointer" });

    // -----------------------------------------
    var circulo = this.add.image(siP.x, siP.y, "circuloP").setAlpha(0.01);
    var circulo2 = this.add.image(noP.x, noP.y, "circuloP").setAlpha(0.01);
    var circulo3 = this.add.image(siP2.x, siP2.y, "circuloP").setAlpha(0.01);
    var circulo4 = this.add.image(noP2.x, noP2.y, "circuloP").setAlpha(0.01);
    var circulo5 = this.add.image(siP3.x, siP3.y, "circuloP").setAlpha(0.01);
    var circulo6 = this.add.image(noP3.x, noP3.y, "circuloP").setAlpha(0.01);
    var circulo7 = this.add.image(siP4.x, siP4.y, "circuloP").setAlpha(0.01);
    var circulo8 = this.add.image(noP4.x, noP4.y, "circuloP").setAlpha(0.01);
    var circulo9 = this.add.image(siP5.x, siP5.y, "circuloP").setAlpha(0.01);
    var circulo10 = this.add.image(noP5.x, noP5.y, "circuloP").setAlpha(0.01);
    var circulo11 = this.add.image(siP6.x, siP6.y, "circuloP").setAlpha(0.01);
    var circulo12 = this.add.image(noP6.x, noP6.y, "circuloP").setAlpha(0.01);
    var circulo13 = this.add.image(siP7.x, siP7.y, "circuloP").setAlpha(0.01);
    var circulo14 = this.add.image(noP7.x, noP7.y, "circuloP").setAlpha(0.01);

    var circuloA = 0;
    var circuloA2 = 0;
    var circuloA3 = 0;
    var circuloA4 = 0;
    var circuloA5 = 0;
    var circuloA6 = 0;
    var circuloA7 = 0;

    siP.on("pointerdown", () => {
      circuloA = 1;
      if (circuloA === 1) {
        circulo.setAlpha(0.6);
        circulo2.setAlpha(0.01);
        finish = 1;
        if (fiebre == "true") {
          if (repeF == 0) {
            fieb_repe += 1;
            repeF = 1;
          }
        } else if (repeF == 1) {
          fieb_repe -= 1;
          repeF = 0;
        }
      }
    });
    noP.on("pointerdown", () => {
      circuloA = 2;
      if (circuloA === 2) {
        circulo2.setAlpha(0.6);
        circulo.setAlpha(0.01);
        finish = 1;
        if (fiebre == "false") {
          if (repeF == 0) {
            fieb_repe += 1;
            repeF = 1;
          }
        } else if (repeF == 1) {
          fieb_repe -= 1;
          repeF = 0;
        }
      }
    });
    siP2.on("pointerdown", () => {
      circuloA2 = 1;
      if (circuloA2 === 1) {
        circulo3.setAlpha(0.6);
        circulo4.setAlpha(0.01);
        finish = 1;
        if (dolCab == "true") {
          if (repeC == 0) {
            dolCab_repe += 1;
            repeC = 1;
          }
        } else if (repeC == 1) {
          dolCab_repe -= 1;
          repeC = 0;
        }
      }
    });
    noP2.on("pointerdown", () => {
      circuloA2 = 2;
      if (circuloA2 === 2) {
        circulo4.setAlpha(0.6);
        circulo3.setAlpha(0.01);
        finish = 1;
        if (dolCab == "false") {
          if (repeC == 0) {
            dolCab_repe += 1;
            repeC = 1;
          }
        } else if (repeC == 1) {
          dolCab_repe -= 1;
          repeC = 0;
        }
      }
    });
    siP3.on("pointerdown", () => {
      circuloA3 = 1;
      if (circuloA3 === 1) {
        circulo5.setAlpha(0.6);
        circulo6.setAlpha(0.01);
        finish = 1;
        if (gang == "true") {
          if (repeG == 0) {
            gang_repe += 1;
            repeG = 1;
          }
        } else if (repeG == 0) {
          gang_repe -= 1;
          repeG = 0;
        }
      }
    });
    noP3.on("pointerdown", () => {
      circuloA3 = 2;
      if (circuloA3 === 2) {
        circulo6.setAlpha(0.6);
        circulo5.setAlpha(0.01);
        finish = 1;
        if (gang == "false") {
          if (repeG == 0) {
            gang_repe += 1;
            repeG = 1;
          }
        } else if (repeG == 0) {
          gang_repe -= 1;
          repeG = 0;
        }
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
        if (perApet == "true") {
          if (repeP == 0) {
            perApet_repe += 1;
            repeP = 1;
          }
        } else if (repeP == 0) {
          perApet_repe -= 1;
          repeP = 0;
        }
      }
    });
    noP7.on("pointerdown", () => {
      circuloA7 = 2;
      if (circuloA7 === 2) {
        circulo14.setAlpha(0.6);
        circulo13.setAlpha(0.01);
        finish = 1;
        if (perApet == "false") {
          if (repeP == 0) {
            perApet_repe += 1;
            repeP = 1;
          }
        } else if (repeP == 0) {
          perApet_repe -= 1;
          repeP = 0;
        }
      }
    });

    // -------------------------------------------------

    negro.on("pointerdown", () => {
      this.scene.sleep();
      if (pausa == 7) {
        this.scene.resume("juego3");
      } else if (pausa == 8) {
        this.scene.resume("juego4");
      }
    });

    var enfermoSello = this.add.image(550, 240, "enfermo").setAlpha(0.01);

    this.add.image(850, 400, "selloD");
    var selloE = this.add
      .image(850, 400, "selloD_s")
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

    this.add.image(850, 200, "selloA").setInteractive({ cursor: "pointer" });
    var selloS = this.add
      .image(850, 200, "selloA_s")
      .setAlpha(0.01)
      .setInteractive({ cursor: "pointer" });

    var sanoSello = this.add.image(550, 240, "sano").setAlpha(0.01);

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
      .image(1040, 50, "tilde")
      .setAlpha(0)
      .setInteractive({ cursor: "pointer" });
    flecha.on("pointerdown", () => {
      resetFicha = 1;
      resetFichaA = 1;
      resetFichaB = 1;
      chat = 0;
      if ((pap = 0)) {
        dolMast = false;
        dolMusc = false;
        fatiga = false;
        perApet = false;
      }
      if (fiebre == "true") {
        if (circuloA == 1) {
          if (fieb_repe == 3) {
            score += 22.86;
          }
        }
      } else {
        if (circuloA == 2) {
          if (fieb_repe == 3) {
            score += 22.86;
          }
        }
      }
      if (dolCab == "true") {
        if (circuloA2 == 1) {
          if (dolCab_repe == 3) {
            score += 22.86;
          }
        }
      } else {
        if (circuloA2 == 2) {
          if (dolCab_repe == 3) {
            score += 22.86;
          }
        }
      }
      if (gang == "true") {
        if (circuloA3 == 1) {
          if (gang_repe == 2) {
            score += 22.86;
          }
        }
      } else {
        if (circuloA3 == 2) {
          if (gang_repe == 2) {
            score += 22.86;
          }
        }
      }
      if (dolMast == "true") {
        if (circuloA4 == 1) {
          score += 22.86;
        }
      } else {
        if (circuloA4 == 2) {
          score += 22.86;
        }
      }
      if (dolMusc == "true") {
        if (circuloA5 == 1) {
          score += 22.86;
        }
      } else {
        if (circuloA5 == 2) {
          score += 22.86;
        }
      }
      if (fatiga == "true") {
        if (circuloA6 == 1) {
          score += 22.86;
        }
      } else {
        if (circuloA6 == 2) {
          score += 22.86;
        }
      }
      if (perApet == "true") {
        if (circuloA7 == 1) {
          if (perApet_repe == 2) {
            score += 22.86;
          }
        }
      } else {
        if (circuloA7 == 2) {
          if (perApet_repe == 2) {
            score += 22.86;
          }
        }
      }
      if (papEnf == 1) {
        if (selloPS == 2) {
          this.scene.sleep();
          this.scene.start("score_F");
          scoreFS++;
        } else if (selloPE == 2) {
          this.scene.sleep();
          this.scene.start("score_E");
          scoreFS++;
        }
      } else {
        if (selloPS == 2) {
          this.scene.sleep();
          this.scene.start("score_E");
          scoreFS++;
        } else if (selloPE == 2) {
          this.scene.sleep();
          this.scene.start("score_F");
          scoreFS++;
        }
      }
      finalScore += score;
    });
    ficha.on("pointerdown", () => {
      if (sellado == 0) {
        if (papEnf == 1) {
          if (selloPS === 1) {
            if (finish == 1) {
              sellado = 1;
              selloE.setAlpha(0.01);
              selloS.setAlpha(0.01);
              selloPS = 2;
              sanoSello.setAlpha(1);
              finish = 2;
              if (pap == 1) {
                flecha.setAlpha(1);
              }
            }
          } else if (selloPE == 1) {
            if (finish == 1) {
              sellado = 1;
              selloE.setAlpha(0.01);
              selloS.setAlpha(0.01);
              selloPE = 2;
              enfermoSello.setAlpha(1);
              finish = 2;
              if (pap == 1) {
                flecha.setAlpha(1);
              }
              score += 600;
              salv += 1;
            }
          }
        } else {
          if (selloPS === 1) {
            if (finish == 1) {
              sellado = 1;
              selloE.setAlpha(0.01);
              selloS.setAlpha(0.01);
              selloPS = 2;
              sanoSello.setAlpha(1);
              finish = 2;
              if (pap == 1) {
                flecha.setAlpha(1);
              }
              score += 600;
              salv += 1;
            }
          } else if (selloPE == 1) {
            if (finish == 1) {
              sellado = 1;
              selloE.setAlpha(0.01);
              selloS.setAlpha(0.01);
              selloPE = 2;
              enfermoSello.setAlpha(1);
              finish = 2;
              if (pap == 1) {
                flecha.setAlpha(1);
              }
            }
          }
        }
      }
    });
  }
}
