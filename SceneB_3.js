class SceneB_3 extends Phaser.Scene {
  constructor() {
    super("Menu3_03");
  }
  update() {
    if (resetFichaB == 1) {
      this.scene.restart();
      resetFichaB = 0;
    }
  }

  create() {
    var repeF = 0;
    var repeC = 0;
    var repeP = 0;

    var sellado = 0;
    selloPS = 0;
    selloPE = 0;
    var negro = this.add
      .image(551, 310, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });
    var ficha2b = this.add
      .image(481, 310, "ficha2b")
      .setScale(0.99)
      .setInteractive();
    var ficha = ficha2b;
    var ficha3b = this.add
      .image(481, 310, "ficha3b")
      .setScale(0.99)
      .setInteractive()
      .setAlpha(0);
    if (pacientes == 2) {
      ficha = ficha3b;
      ficha3b.setAlpha(1);
      ficha2b.setAlpha(0);
    }

    var flechaB = this.add
      .image(270, 520, "flechaP")
      .setInteractive({ cursor: "pointer" })
      .setFlip(true, false)
      .setAlpha(0.75);

    flechaB.on("pointerdown", () => {
      this.scene.run("Menu3_02");
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

    // -----------------------------------------
    var circulo = this.add.image(siP.x, siP.y, "circuloP").setAlpha(0.01);
    var circulo2 = this.add.image(noP.x, noP.y, "circuloP").setAlpha(0.01);
    var circulo3 = this.add.image(siP2.x, siP2.y, "circuloP").setAlpha(0.01);
    var circulo4 = this.add.image(noP2.x, noP2.y, "circuloP").setAlpha(0.01);
    var circulo5 = this.add.image(siP3.x, siP3.y, "circuloP").setAlpha(0.01);
    var circulo6 = this.add.image(noP3.x, noP3.y, "circuloP").setAlpha(0.01);
    var circulo7 = this.add.image(siP4.x, siP4.y, "circuloP").setAlpha(0.01);
    var circulo8 = this.add.image(noP4.x, noP4.y, "circuloP").setAlpha(0.01);

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
    noP3.on("pointerdown", () => {
      circuloA3 = 2;
      if (circuloA3 === 2) {
        circulo6.setAlpha(0.6);
        circulo5.setAlpha(0.01);
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
      if ((vari = 0)) {
        cans = false;
      }
      if (fiebre == "true") {
        if (circuloA == 1) {
          if (fieb_repe == 3) {
            score += 40;
          }
        }
      } else {
        if (circuloA == 2) {
          if (fieb_repe == 3) {
            score += 40;
          }
        }
      }
      if (dolCab == "true") {
        if (circuloA2 == 1) {
          if (dolCab_repe == 3) {
            score += 40;
          }
        }
      } else {
        if (circuloA2 == 2) {
          if (dolCab_repe == 3) {
            score += 40;
          }
        }
      }
      if (perApet == "true") {
        if (circuloA3 == 1) {
          if (perApet_repe == 2) {
            score += 40;
          }
        }
      } else {
        if (circuloA3 == 2) {
          if (perApet_repe == 2) {
            score += 40;
          }
        }
      }
      if (cans == "true") {
        if (circuloA4 == 1) {
          score += 40;
        }
      } else {
        if (circuloA4 == 2) {
          score += 40;
        }
      }

      if (variEnf == 1) {
        if (selloPS == 2) {
          this.scene.pause();
          this.scene.start("score_F");
          scoreFS++;
        } else if (selloPE == 2) {
          this.scene.pause();
          this.scene.start("score_E");
          scoreFS++;
        }
      } else {
        if (selloPS == 2) {
          this.scene.pause();
          this.scene.start("score_E");
          scoreFS++;
        } else if (selloPE == 2) {
          this.scene.pause();
          this.scene.start("score_F");
          scoreFS++;
        }
      }
      finalScore += score;
    });

    ficha.on("pointerdown", () => {
      if (sellado == 0) {
        if (variEnf == 1) {
          if (selloPS === 1) {
            if (finish == 1) {
              sellado = 1;
              selloE.setAlpha(0.01);
              selloS.setAlpha(0.01);
              selloPS = 2;
              sanoSello.setAlpha(1);
              finish = 2;
              if (vari == 1) {
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
              if (vari == 1) {
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
              if (vari == 1) {
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
              if (vari == 1) {
                flecha.setAlpha(1);
              }
            }
          }
        }
      }
    });
  }
}
