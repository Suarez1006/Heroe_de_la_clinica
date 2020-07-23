class SceneB extends Phaser.Scene {
  constructor() {
    super("Menu3");
  }

  create() {
    var selloPS = 0;
    var selloPE = 0;
    var negro = this.add
      .image(551, 310, "negro")
      .setAlpha(0.4)
      .setInteractive({ cursor: "pointer" });
    var ficha = this.add
      .image(481, 310, "ficha")
      .setScale(0.99)
      .setInteractive();

    var siP = this.add
      .image(570, 290, "siP")
      .setInteractive({ cursor: "pointer" });
    var siP2 = this.add
      .image(570, 324, "siP")
      .setInteractive({ cursor: "pointer" });
    var siP3 = this.add
      .image(570, 358, "siP")
      .setInteractive({ cursor: "pointer" });
    var siP4 = this.add
      .image(570, 390, "siP")
      .setInteractive({ cursor: "pointer" });
    var siP5 = this.add
      .image(570, 416, "siP")
      .setInteractive({ cursor: "pointer" });
    var siP6 = this.add
      .image(570, 440, "siP")
      .setInteractive({ cursor: "pointer" });
    var siP7 = this.add
      .image(570, 465, "siP")
      .setInteractive({ cursor: "pointer" });
    var siP8 = this.add
      .image(570, 490, "siP")
      .setInteractive({ cursor: "pointer" });

    var noP = this.add
      .image(650, 290, "noP")
      .setInteractive({ cursor: "pointer" });
    var noP2 = this.add
      .image(650, 324, "noP")
      .setInteractive({ cursor: "pointer" });
    var noP3 = this.add
      .image(650, 358, "noP")
      .setInteractive({ cursor: "pointer" });
    var noP4 = this.add
      .image(650, 390, "noP")
      .setInteractive({ cursor: "pointer" });
    var noP5 = this.add
      .image(650, 416, "noP")
      .setInteractive({ cursor: "pointer" });
    var noP6 = this.add
      .image(650, 440, "noP")
      .setInteractive({ cursor: "pointer" });
    var noP7 = this.add
      .image(650, 465, "noP")
      .setInteractive({ cursor: "pointer" });
    var noP8 = this.add
      .image(650, 490, "noP")
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
    var circulo15 = this.add.image(siP8.x, siP8.y, "circuloP").setAlpha(0.01);
    var circulo16 = this.add.image(noP8.x, noP8.y, "circuloP").setAlpha(0.01);

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

    // -------------------------------------------------

    negro.on("pointerdown", () => {
      this.scene.sleep();
      if (pausa == 2) {
        this.scene.resume("juego");
        pausa = 0;
      } else if (pausa == 4) {
        this.scene.resume("juego2");
        pausa = 0;
      }
    });

    var selloE = this.add
      .image(850, 400, "selloD")
      .setInteractive({ cursor: "pointer" });

    var enfermo = this.add.image(550, 220, "enfermo").setAlpha(0.01);

    selloE.on("pointerdown", () => {
      if (selloPE == 0) {
        selloPE = 1;
        selloPS = 0;
        selloS.clearTint();
        selloE.setTint(0x7f7f7f);
      } else if (selloPE == 1) {
        selloPE = 0;
        selloE.clearTint();
      }
    });
    selloE.on("pointerover", () => {
      if (selloPE == 0) {
        selloE.setTint(0xff0000);
      }
    });
    selloE.on("pointerout", () => {
      if (selloPE === 0) {
        selloE.clearTint();
      }
    });

    var selloS = this.add
      .image(850, 200, "selloA")
      .setInteractive({ cursor: "pointer" });

    var sano = this.add.image(550, 220, "sano").setAlpha(0.01);

    selloS.on("pointerdown", () => {
      if (selloPS == 0) {
        selloPS = 1;
        selloPE = 0;
        selloE.clearTint();
        selloS.setTint(0x7f7f7f);
      } else if (selloPS == 1) {
        selloPS = 0;
        selloS.clearTint();
      }
    });
    selloS.on("pointerover", () => {
      if (selloPS == 0) {
        selloS.setTint(0x00ff00);
      }
    });
    selloS.on("pointerout", () => {
      if (selloPS === 0) {
        selloS.clearTint();
      }
    });

    var flecha = this.add
      .image(1040, 50, "tilde")
      .setAlpha(0)
      .setInteractive({ cursor: "pointer" });
    flecha.on("pointerdown", () => {
      if (circuloA == 1) {
        score += 20;
      }
      if (circuloA2 == 1) {
        score += 20;
      }
      if (circuloA3 == 1) {
        score += 20;
      }
      if (circuloA4 == 2) {
        score += 20;
      }
      if (circuloA5 == 2) {
        score += 20;
      }
      if (circuloA6 == 1) {
        score += 20;
      }
      if (circuloA7 == 1) {
        score += 20;
      }
      if (circuloA8 == 1) {
        score += 20;
      }

      if (selloPE == 2) {
        this.scene.start("score_E");
      } else if (selloPS == 2) {
        this.scene.start("score_F");
      }
    });

    ficha.on("pointerdown", () => {
      if (selloPS === 1) {
        if (finish == 1) {
          selloPS = 2;
          sano.setAlpha(1);
          finish = 2;
          flecha.setAlpha(1);
        }
      } else if (selloPE == 1) {
        if (finish == 1) {
          selloPE = 2;
          enfermo.setAlpha(1);
          finish = 2;
          flecha.setAlpha(1);
          salv += 1;
          score += 600;
        }
      }
    });
  }
}
